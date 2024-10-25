import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import App from './App';
import Home from './Home';
import Product1 from './products/Product1';
import Product2 from './products/Product2';
import Product3 from './products/Product3';
import Product4 from './products/Product4';
import Product5 from './products/Product5';
import Product6 from './products/Product6';
import Product7 from './products/Product7';
import Product8 from './products/Product8';
import Product9 from './products/Product9';
import Product10 from './products/Product10';
import Product11 from './products/Product11';
import Product12 from './products/Product12';
import Product13 from './products/Product13';
import Product14 from './products/Product14';
import Product15 from './products/Product15';


function Title() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products' Component={HomePage} />
        <Route path='/review' Component={App} /> 
        <Route path='/product1' Component={Product1}></Route>
        <Route path='/product2' Component={Product2}></Route>
        <Route path='/product3' Component={Product3}></Route>
        <Route path='/product4' Component={Product4}></Route>
        <Route path='/product5' Component={Product5}></Route>
        <Route path='/product6' Component={Product6}></Route>
        <Route path='/product7' Component={Product7}></Route>
        <Route path='/product8' Component={Product8}></Route>
        <Route path='/product9' Component={Product9}></Route>
        <Route path='/product10' Component={Product10}></Route>
        <Route path='/product11' Component={Product11}></Route>
        <Route path='/product12' Component={Product12}></Route>
        <Route path='/product13' Component={Product13}></Route>
        <Route path='/product14' Component={Product14}></Route>
        <Route path='/product15' Component={Product15}></Route>
      </Routes>
    </div>
  )
}

export default Title