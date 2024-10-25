import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState({});
  const [productName, setProductName] = useState(""); // selected product
  const [newReview, setNewReview] = useState("");

  // Predefined list of 15 products
  const productList = [
    "iPhone15", "iPhone14", "iPhoneSE", "MacBookAir", "MacBookPro",
    "iMac", "iPadPro", "iPadAir", "iPad", "iPadMini",
    "AirPods", "AirPodsPro", "AirPodsMax", "AppleWatch10", "AppleWatchUltra"
  ];

  useEffect(() => {
    // Fetch products and their average ratings
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleAddReview = () => {
    // Send a new review to the backend
    axios.post('http://localhost:5000/sentiment', {
      product: productName,
      reviews: [newReview]
    })
      .then(response => {
        alert(response.data.message);
        setNewReview("");
        setProductName("");
        // Re-fetch products after adding a review
        return axios.get('http://localhost:5000/products');
      })
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error adding review", error));
  };

  return (
    <div className="App">
      <h1>Reviews</h1>
      <Link to='/'><button className='button'>Home</button></Link>
      <Link to='/products'><button className='button'>View Products</button></Link>
      <div className='flex'>
      <div className="add-review">
        <h2>Add a Review</h2>
        <select 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)}
          required
        >
          <option value="" disabled>Select a product</option>
          {productList.map((product, index) => (
            <option className='option' key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
        
        <textarea
          placeholder="Write your review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
        />
        
        <button onClick={handleAddReview}>Submit</button>
      </div>
      <div className="products">
        <h2>Average Ratings for Products</h2>
        <ul>
          {Object.keys(products).map(product => (
            <li key={product}>
              <j className='prod'>{product} : </j> {products[product]} / 5
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
