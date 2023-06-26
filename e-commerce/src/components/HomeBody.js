import React, { useState } from 'react';
import ProductItem from './ProductItem';

const HomeBody = ({ productList, setCount }) => {
  return (
    <div className="flex flex-row items-center gap-4 flex-wrap">
      {/* <button onClick={plus}>plus</button> */}
      {/* <ProductItem /> */}
      {productList.map((productItem) => {
        return (
          <ProductItem
            index={productItem.id}
            setCount={setCount}
            name={productItem.name}
            price={productItem.price}
            discount={productItem.discount}
          />
        );
      })}
    </div>
  );
};

export default HomeBody;
