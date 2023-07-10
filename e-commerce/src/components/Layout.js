import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const activeClass = (params) => {
    return params.isActive ? 'active-item' : '';
  };
  return (
    <div>
      <ul className="flex flex-row justify-center items-center gap-4">
        <li>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/welcome" className={activeClass}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={activeClass}>
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
