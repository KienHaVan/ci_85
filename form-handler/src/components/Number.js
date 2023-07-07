import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Number = () => {
  const { number, setNumber } = useContext(AppContext);
  console.log('🚀 ~ file: Number.js:6 ~ Number ~ number:', number);
  return <button onClick={() => setNumber(number + 1)}>Number</button>;
};

export default Number;
