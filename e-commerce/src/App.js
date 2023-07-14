import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import HomeBody from './components/HomeBody';
import Layout from './components/Layout';
import ProductDetail from './components/ProductDetail';

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
  const [user, setUser] = useState([]);
  console.log('🚀 ~ file: App.js:35 ~ App ~ user:', user);
  // console.log('🚀 ~ file: App.js:32 ~ App ~ count:', count);
  // useEffect(() => {
  //   console.log('first');
  // });
  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })
  //   //   .then((res) => console.log(res))
  //   //   .catch(() => console.log('first'));
  //   async function logJSONData() {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplacehoggighihulder.typicode.com/users'
  //       );
  //       const jsonData = await response.json();
  //       console.log(jsonData);
  //     } catch (error) {
  //       console.log('first');
  //     }
  //   }
  //   logJSONData();
  // }, []);
  // useEffect(() => {
  //   console.log('first');
  // }, [first]);

  const getUser = async () => {
    const response = await fetch(
      'https://6375d83e7e93bcb006bb4758.mockapi.io/userData'
    );
    const jsonData = await response.json();
    setUser(jsonData);
    console.log('🚀 ~ file: App.js:84 ~ getUser ~ jsonData:', jsonData);
  };

  const addUser = async () => {
    const rawResponse = await fetch(
      'https://6375d83e7e93bcb006bb4758.mockapi.io/userData',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ a: 1, b: 'Textual content' }),
      }
    );
    const content = await rawResponse.json();
    console.log('🚀 ~ file: App.js:76 ~ addUser ~ content:', content);
  };

  const updateUser = async () => {
    const rawResponse = await fetch(
      'https://6375d83e7e93bcb006bb4758.mockapi.io/userData/30',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: 'Mike Russedgsdgsegl',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1067.jpg',
          email: 'Madaline97@gmail.com',
          gender: 'Xenogender',
          id: '80',
          a: 11111,
          b: 'Textual content',
        }),
      }
    );
    const content = await rawResponse.json();
    console.log('🚀 ~ file: App.js:76 ~ addUser ~ content:', content);
  };

  const deleteUser = async () => {
    const rawResponse = await fetch(
      'https://6375d83e7e93bcb006bb4758.mockapi.io/userData/31',
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const content = await rawResponse.json();
    console.log('🚀 ~ file: App.js:76 ~ addUser ~ content:', content);
  };

  return (
    <div className="w-[1280px] mx-auto ">
      {/* <Header count={count} />
      <HomeBody productList={productList} setCount={setCount} count={count} />
      <Cart /> */}
      {/* <button
        onClick={() => setCount(count + 1)}
        className="px-4 px-2 bg-red-400"
      >
        <text>Click</text>
      </button> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <HomeBody
                  productList={productList}
                  setCount={setCount}
                  count={count}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>

      <button
        onClick={getUser}
        className="px-4 py-2 border border-red-400 rounded-lg"
      >
        Get User
      </button>
      <button
        onClick={addUser}
        className="px-4 py-2 border border-red-400 rounded-lg"
      >
        Add User
      </button>
      <button
        onClick={updateUser}
        className="px-4 py-2 border border-red-400 rounded-lg"
      >
        update User
      </button>
      <button
        onClick={deleteUser}
        className="px-4 py-2 border border-red-400 rounded-lg"
      >
        delete User
      </button>
    </div>
  );
};

export default App;
