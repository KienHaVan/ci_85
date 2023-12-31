import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { Link, useNavigate } from 'react-router-dom';

const HomeBody = ({ productList, setCount, count }) => {
  const handleAddToCart = (item) => {
    // setCount((prev) => [...prev, item]);
    // console.log(item);
    setCount([...count, item]);
  };
  const navigate = useNavigate();
  return (
    <div className="mt-4 border rounded-md border-gray-400 mb-10">
      <h1 className="font-bold text-4xl">Home Screen</h1>
      <Link to="/cart">cart</Link>
      <button onClick={() => navigate('/products/1')}>go to product 1</button>
      <div className="flex flex-row items-center gap-4 flex-wrap">
        {/* <button onClick={plus}>plus</button> */}
        {/* <ProductItem /> */}
        {productList.map((productItem) => {
          return (
            <ProductItem
              key={productItem.id}
              index={productItem.id}
              onClick={() => handleAddToCart(productItem)}
              name={productItem.name}
              price={productItem.price}
              discount={productItem.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeBody;
