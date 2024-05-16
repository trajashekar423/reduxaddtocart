"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

import { addProduct, removeProduct, updateProduct } from '../store/productsSlice';


function Myproducts() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div>
        <h1>Myproducts</h1>
    </div>
  )
}

export default Myproducts
