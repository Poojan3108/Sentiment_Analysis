import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Product Sentiment Analysis</h1>
      <Link to='/products'><button className='button'>View Products</button></Link>
      <Link to='/review'><button className='button'>Add a Review</button></Link>
    </div>
  )
}

export default Home