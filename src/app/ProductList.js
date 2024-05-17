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
        <div key={product.id} className='col-4 mb-4'>       
          <div className="card">
          {/* <Image src={product.image} width="300" height="500"  /> */}
          <div className="card-body">
            <p className="card-text fw-bold">{product.title}</p>
            <p className="card-text">
              {product.description}
            </p>
            <h5 className="card-title">${product.price}</h5>
            <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className='btn btn-danger' onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
          </div>
        </div>       
        </div>
         ))}
        </div>
    </div>
   
  );
}

export default ProductList;

