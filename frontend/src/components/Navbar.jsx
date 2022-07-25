import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";

import { navBarStandardLinks, navbarUserLinks } from "@services/navbarData";

import logo from "@assets/logo.png";

export default function Navbar() {
  const { user } = useContext(UserContext);

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleLinkClick = (e) => {
    console.error(e.target);
  };

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mx-4">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto fixed top-0 left-0 right-0 bg-amber-100 opacity-90">
          <Link to="/">
            <div className="w-full relative flex flex-row justify-between lg:w-auto lg:static lg:justify-start">
              <button
                className="text-white cursor-pointer text-xl leading-none py-2 mx-4 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <img src={logo} alt="Poke-React" className="w-10 h-10" />
              </button>
              <h1 className="m-auto text-center hidden lg:block font-bold text-3xl poppins">
                Poke-React
              </h1>
            </div>
          </Link>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-center lg:flex-row list-none lg:ml-auto mr-4">
              {navBarStandardLinks.map(
                (link, key) =>
                  ((link.private && user) || !link.private) && (
                    <Link key={key} to={link.link}>
                      <li className="nav-item">
                        <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                          {link.name}
                        </p>
                      </li>
                    </Link>
                  )
              )}
              {navbarUserLinks.map((link, key) =>
                user
                  ? link.private &&
                    user && (
                      <Link key={key} to={link.link}>
                        <li className="nav-item">
                          <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                            {link.name}
                          </p>
                        </li>
                      </Link>
                    )
                  : !link.private && (
                      <Link key={key} to={link.link} onClick={handleLinkClick}>
                        <li className="nav-item">
                          <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-50 hover:scale-105 duration-700 ease-in-out mx-auto poppins">
                            {link.name}
                          </p>
                        </li>
                      </Link>
                    )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
