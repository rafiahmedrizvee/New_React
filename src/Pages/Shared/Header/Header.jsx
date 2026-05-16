import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { user, logOut } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Service", path: "/service" },
  ];

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
     ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"}`;

  // Logout Function
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logout Successful"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Menu */}
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

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass} onClick={scrollToTop}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          {/* Logo Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt="Logo"
            className="w-10 h-10"
          />

          {/* Website Name */}
          <span className="hidden sm:block">DevSphere</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClass} onClick={scrollToTop}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-3 shadow"
            >
              <li className="font-bold text-lg">{user.displayName}</li>

              <li className="text-sm text-gray-500">{user.email}</li>

              <li className="mt-2">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
