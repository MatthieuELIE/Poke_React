import React from "react";
import { Link } from "react-router-dom";

import logo from "@assets/logo.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container w-full flex flex-wrap items-center justify-between mx-auto fixed top-0 left-0 right-0 bg-amber-100 opacity-90">
          <div className="w-full relative flex flex-row justify-between lg:w-auto lg:static lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none py-2 mx-4 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={logo} alt="Poke-React" className="w-10 h-10" />
            </button>
            <h1 className="m-auto text-center hidden md:block font-bold text-3xl poppins">
              Poke-React
            </h1>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-center lg:flex-row list-none lg:ml-auto">
              <Link to="/">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                    Home
                  </p>
                </li>
              </Link>
              <Link to="/pokemonlist">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                    Pokemon List
                  </p>
                </li>
              </Link>
              <Link to="/search">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                    Search
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
