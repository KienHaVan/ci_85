import React from 'react';
import ProductItem from './ProductItem';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="mt-4 border rounded-md border-gray-400 mb-10">
      <h2 className="text-4xl font-bold p-4">Cart</h2>
      <div className="flex flex-row  items-center gap-4 flex-wrap p-8">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
