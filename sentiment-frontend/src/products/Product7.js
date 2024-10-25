import React from 'react'
import { Link } from 'react-router-dom'
import product7 from './images/product7.jpg'

function Product7() {
  return (
    <div>
      <h2 className='productTitle'>iPhone15</h2>
      <div className='flex'>
        <img className='bigimage' src={product7}></img>
        <p className='price'>Rs. 69,900<p className='description'>Available in the popular 6.1-inch size and a stunning new 6.7-inch size,2 iPhone 14 and iPhone 14 Plus feature a durable and sleek aerospace-grade aluminium design in five beautiful finishes. The larger display of iPhone 14 Plus is great for streaming movies and playing games, and iPhone 14 Plus boasts the best battery life ever in an iPhone.3 Both models have an updated internal design for better thermal performance, gorgeous Super Retina XDR displays with OLED technology that supports 1200 nits of peak HDR brightness, a 2,000,000:1 contrast ratio, and Dolby Vision.<button className='buy'>Buy</button><Link to='/review'><button className='button'>Add a Review</button></Link></p></p>
      </div>
      <center><Link to='/products'><button className='button'>Back</button></Link></center>
    </div>
  )
}

export default Product7