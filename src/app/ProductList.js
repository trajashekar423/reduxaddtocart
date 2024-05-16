// ProductList.js
"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { addProduct, removeProduct, updateProduct } from './store/productsSlice';


function ProductList() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

 
  return (
    <div className='container'>
        <div className='row'>
        {products.map(product => (
        <div className='col-4 mb-4'>
       
          <div key={product.id} class="card">
          {/* <Image src={product.image} width="300" height="500"  /> */}
          <div class="card-body">
            <p class="card-text fw-bold">{product.title}</p>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 class="card-title">${product.price}</h5>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
          </div>
        </div>
       
        </div>
         ))}
        </div>
    </div>
   
  );
}

export default ProductList;

