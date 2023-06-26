import React from 'react';

const CartItem = ({ index = 1 }) => {
  return (
    <div className="py-2 px-4 border border-gray-400 rounded-md inline-flex flex-col gap-2">
      <div className="w-[200px] h-[200px]">
        {/* <img
          src="https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt=""
          className="w-full rounded-md"
        /> */}
        <img
          alt="crypto"
          src={`https://source.unsplash.com/random/?Cryptocurrency&${index}`}
          className="w-full rounded-md h-full object-cover"
        ></img>
      </div>
      <h2 className="text-3xl font-bold">Adidas</h2>
      <div className="flex flex-row items-center justify-between px-2">
        <h3 className="text-2xl font-bold">120$</h3>
        <h3 className="text-red-500 ">50% off</h3>
      </div>
      {/* <button className="py-2 bg-green-400 rounded-md">
        <p className="text-white">Add to cart</p>
      </button> */}
    </div>
  );
};

export default CartItem;
