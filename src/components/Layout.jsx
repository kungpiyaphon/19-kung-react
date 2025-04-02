import React from 'react'
import { Link, Outlet } from 'react-router';
import Home from '../pages/Home';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-teal-500 text-white p-4 shadow-md">
        <ul className="flex gap-4 justify-center">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:text-yellow-400">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/owner" className="hover:text-yellow-400">
              Owner
            </Link>
          </li>
          <li>
            <Link to="/user" className="hover:text-yellow-400">
              User
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full bg-amber-400">
        <Home />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout