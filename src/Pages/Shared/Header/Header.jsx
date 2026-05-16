import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Service", path: "/service" },
  ];

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
     ${
       isActive
         ? "bg-primary text-white"
         : "text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      
      {/* Left Side - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <a className="text-xl font-bold text-primary">MyBrand</a>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
         <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
 
      </div>
    </div>
  );
};

export default Header;