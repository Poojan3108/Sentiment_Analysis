from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL database configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'  # Replace with your MySQL username
app.config['MYSQL_PASSWORD'] = ''  # Replace with your MySQL password
app.config['MYSQL_DB'] = 'sentiment_analysis'

mysql = MySQL(app)

def analyze_sentiment(review):
    blob = TextBlob(review)
    return blob.sentiment.polarity

def polarity_to_rating(polarity):
    return round((polarity + 1) * 2) + 1

@app.route('/products', methods=['GET'])
def get_products():
    cur = mysql.connection.cursor()
    cur.execute("SELECT name, average_rating FROM products")
    products = cur.fetchall()
    cur.close()

    products_dict = {product[0]: product[1] for product in products}
    return jsonify(products_dict)

@app.route('/sentiment', methods=['POST'])
def sentiment_analysis():
    data = request.json
    product_name = data.get("product")
    reviews = data.get("reviews", [])

    # Check if product exists
    cur = mysql.connection.cursor()
    cur.execute("SELECT id FROM products WHERE name = %s", (product_name,))
    product = cur.fetchone()

    if not product:
        # Insert new product if it doesn't exist
        cur.execute("INSERT INTO products (name) VALUES (%s)", (product_name,))
        mysql.connection.commit()
        product_id = cur.lastrowid
    else:
        product_id = product[0]

    total_rating = 0
    for review in reviews:
        polarity = analyze_sentiment(review)
        rating = polarity_to_rating(polarity)
        total_rating += rating

        # Insert each review into the database
        cur.execute("INSERT INTO reviews (product_id, review, rating) VALUES (%s, %s, %s)",
                    (product_id, review, rating))
    
    # Update the product's average rating
    avg_rating = total_rating / len(reviews)
    cur.execute("UPDATE products SET average_rating = %s WHERE id = %s", (avg_rating, product_id))
    mysql.connection.commit()
    cur.close() 

    return jsonify({"message": f"Reviews added for {product_name}."})

if __name__ == '__main__':
    app.run(debug=True)
