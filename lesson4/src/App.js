import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './Card';

function App() {
  const branch = ['adidas', 'nike', 'thuong dinh', 'asia'];

  return (
    <div className="App">
      {/* <Card branch="adidas" />
      <Card branch="nike" />
      <Card branch="thuong dinh" />
      <Card branch="asia" /> */}
      {branch.map((branchItem) => {
        return <Card branch={branchItem} />;
      })}
    </div>
  );
}

export default App;
