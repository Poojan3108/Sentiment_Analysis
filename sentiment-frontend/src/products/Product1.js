import React from 'react'
import { Link } from 'react-router-dom'
import product1 from './images/product1.jpg'

function Product1() {
  return (
    <div>
      <h2 className='productTitle'>iPhone15</h2>
      <div className='flex'>
        <img className='bigimage' src={product1}></img>
        <p className='price'>Rs. 69,900<p className='description'>Available in 6.1-inch and 6.7-inch display sizes,1 iPhone 15 and iPhone 15 Plus feature the Dynamic Island, an innovative way to interact with important alerts and Live Activities. The elegant experience fluidly expands and adapts so users can see the next direction in Maps; easily control music; and, with third-party app integrations, get real-time updates on food delivery, ride sharing, sports scores, travel plans, and more. The Super Retina XDR display is great for watching content, streaming Apple Fitness+ workouts, and playing games. Peak HDR brightness now reaches up to 1600 nits so HDR photos and videos look better than ever. And when it is sunny, peak outdoor brightness reaches up to 2000 nits — twice as bright as the previous generation.<button className='buy'>Buy</button><Link to='/review'><button className='button'>Add a Review</button></Link></p></p>
      </div>
      <center><Link to='/products'><button className='button'>Back</button></Link></center>
    </div>
  )
}

export default Product1