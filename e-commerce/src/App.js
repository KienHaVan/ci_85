import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import Cart from './components/Cart';

// ["abc", "xyz",...]
const productList = [
  { name: 'Adidas', id: 1, price: 10, discount: 20 },
  { name: 'Nike', id: 2, price: 15, discount: 30 },
  { name: 'Puma', id: 3, price: 8, discount: 15 },
  { name: 'Reebok', id: 4, price: 12, discount: 25 },
  { name: 'Under Armour', id: 5, price: 20, discount: 10 },
  { name: 'New Balance', id: 6, price: 11, discount: 18 },
  { name: 'Asics', id: 7, price: 17, discount: 22 },
  { name: 'Fila', id: 8, price: 14, discount: 28 },
  { name: 'Saucony', id: 9, price: 13, discount: 17 },
  { name: 'Vans', id: 10, price: 16, discount: 35 },
  // { name: 'Converse', id: 11, price: 19, discount: 15 },
  // { name: 'Mizuno', id: 12, price: 22, discount: 20 },
  // { name: 'Salomon', id: 13, price: 24, discount: 12 },
  // { name: 'Asolo', id: 14, price: 27, discount: 24 },
  // { name: 'Mammut', id: 15, price: 30, discount: 10 },
  // { name: 'Merrell', id: 16, price: 23, discount: 22 },
  // { name: 'La Sportiva', id: 17, price: 28, discount: 18 },
  // { name: 'Hoka One One', id: 18, price: 25, discount: 30 },
  // { name: 'Brooks', id: 19, price: 21, discount: 25 },
  // { name: 'Altra', id: 20, price: 26, discount: 28 },
];

const App = () => {
  const [count, setCount] = useState(0);
  console.log('🚀 ~ file: App.js:32 ~ App ~ count:', count);
  // useEffect(() => {
  //   console.log('first');
  // });
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => console.log(res))
    //   .catch(() => console.log('first'));
    async function logJSONData() {
      try {
        const response = await fetch(
          'https://jsonplacehoggighihulder.typicode.com/users'
        );
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.log('first');
      }
    }
    logJSONData();
  }, []);
  // useEffect(() => {
  //   console.log('first');
  // }, [first]);

  return (
    <div className="w-[1280px] mx-auto ">
      {/* <Header count={count} />
      <HomeBody productList={productList} setCount={setCount} count={count} />
      <Cart /> */}
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 px-2 bg-red-400"
      >
        <text>Click</text>
      </button>
    </div>
  );
};

export default App;
