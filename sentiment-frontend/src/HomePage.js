import React from 'react'
import './App.css'
import product1 from './products/images/product1.jpg'
import product2 from './products/images/product2.jpg'
import product3 from './products/images/product3.jpg'
import product4 from './products/images/product4.jpg'
import product5 from './products/images/product5.jpg'
import product6 from './products/images/product6.jpg'
import product7 from './products/images/product7.jpg'
import product8 from './products/images/product8.jpg'
import product9 from './products/images/product9.jpg'
import product10 from './products/images/product10.jpg'
import product11 from './products/images/product11.jpg'
import product12 from './products/images/product12.jpg'
import product13 from './products/images/product13.jpg'
import product14 from './products/images/product14.jpg'
import product15 from './products/images/product15.jpg'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='title'>
        <div>
            <h1 className='h1'>Products</h1>
            <Link to='/'><button className='button'>Home</button></Link>
            <Link to='/review'><button className='button'>Add a Review</button></Link>
        </div>
    <div className='flex'>
        <Link className='decorate' to='/product1'>
        <div className='images'>
            <h2>iPhone 15</h2>
            <img src={product1}></img>
            <p>Rs. 69,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product2'>
        <div className='images'>
            <h2>iPhone 14</h2>
            <img src={product2}></img>
            <p>Rs. 59,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product3'>
        <div className='images'>
            <h2>iPhone SE</h2>
            <img src={product3}></img>
            <p>Rs. 39,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product4'>
        <div className='images'>
            <h2>MacBook Air</h2>
            <img src={product4}></img>
            <p>Rs. 90,990</p>
        </div>
        </Link>
        <Link className='decorate' to='/product5'>
        <div className='images'>
            <h2>MacBook Pro</h2>
            <img src={product5}></img>
            <p>Rs. 1,86,899</p>
        </div>
        </Link>
    </div>
    <div className='flex'>
        <Link className='decorate' to='/product6'>
        <div className='images'>
            <h2>iMac</h2>
            <img src={product6}></img>
            <p>Rs. 1,34,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product7'>
        <div className='images'>
            <h2>iPad Pro</h2>
            <img src={product7}></img>
            <p>Rs. 1,09,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product8'>
        <div className='images'>
            <h2>iPad Air</h2>
            <img src={product8}></img>
            <p>Rs. 59,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product9'>
        <div className='images'>
            <h2>iPad</h2>
            <img src={product9}></img>
            <p>Rs. 34,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product10'>
        <div className='images'>
            <h2>iPad Mini</h2>
            <img src={product10}></img>
            <p>Rs. 63,900</p>
        </div>
        </Link>
    </div>
    <div className='flex'>
        <Link className='decorate' to='/product11'>
        <div className='images'>
            <h2>AirPods</h2>
            <img src={product11}></img>
            <p>Rs. 10,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product12'>
        <div className='images'>
            <h2>AirPods Pro</h2>
            <img src={product12}></img>
            <p>Rs. 23,399</p>
        </div>
        </Link>
        <Link className='decorate' to='/product13'>
        <div className='images'>
            <h2>Airpods Max</h2>
            <img src={product13}></img>
            <p>Rs. 59,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product14'>
        <div className='images'>
            <h2>Apple Watch 10</h2>
            <img src={product14}></img>
            <p>Rs. 44,900</p>
        </div>
        </Link>
        <Link className='decorate' to='/product15'>
        <div className='images'>
            <h2>Apple Watch Ultra</h2>
            <img src={product15}></img>
            <p>Rs. 84,199</p>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default HomePage