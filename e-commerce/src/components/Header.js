import React from 'react';
import { BiSearch, BiCart, BiUser } from 'react-icons/bi';

const Header = ({ count }) => {
  return (
    <div className="flex flex-row items-center px-4 gap-8 my-4">
      <h1 className="text-4xl font-bold">SHOP APP</h1>
      <div className="flex-1 px-4 py-2 border border-gray-400 rounded-md flex flex-row items-center">
        <BiSearch size={32} />
        <input
          type="text"
          placeholder="Nhập tên sản phẩm ..."
          className="ml-4"
        />
      </div>
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-row items-center gap">
          <BiCart size={32} />
          <h4 className="text-xl font-semibold text-red-400">
            ({count.length})
          </h4>
        </div>
        <BiUser size={32} />
      </div>
    </div>
  );
};

export default Header;
