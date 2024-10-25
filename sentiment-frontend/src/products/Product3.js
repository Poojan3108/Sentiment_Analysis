import React from 'react'
import { Link } from 'react-router-dom'
import product3 from './images/product3.jpg'

function Product3() {
  return (
    <div>
      <h2 className='productTitle'>iPhoneSE</h2>
      <div className='flex'>
        <img className='bigimage' src={product3}></img>
        <p className='price'>Rs. 39,900<p className='description'>At the heart of iPhone SE you'll find the same super-powerful A15 Bionic chip that's in iPhone 13.A15 Bionic enhances nearly everything you do. Apps load in a flash and feel so fluid.You get incredibly smooth graphics performance for gaming. A15 Bionic even powers advanced photography features that make each part of your photo — faces, places, everything — look fabulous. A highly efficient chip, an enhanced battery and iOS 18 work together to boost battery life. When you do need to charge, just place iPhone SE on a wireless charger. Or connect a 20W or higher adapter to fast charge from zero to up to 50% charge in 30 minutes flat.<br /><button className='buy'>Buy</button><Link to='/review'><button className='button'>Add a Review</button></Link></p></p>
      </div>
      <center><Link to='/products'><button className='button'>Back</button></Link></center>
    </div>
  )
}

export default Product3