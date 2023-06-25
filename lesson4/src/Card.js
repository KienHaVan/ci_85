import React, { useState } from 'react';

const Card = ({ branch }) => {
  const [sold, setSold] = useState(0);
  const handleClick = () => {
    setSold(sold + 1);
  };
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt=""
        width="200"
        height="200"
      />
      <h4>{branch}</h4>
      <p>30$</p>
      <h3>sold: {sold}</h3>
      <button onClick={handleClick}>Mua</button>
    </div>
  );
};

export default Card;
