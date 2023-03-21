import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bayajid-logo.png";

const NavBar = () => {

  const scroll = (id_name) => {
    const section = document.querySelector(`#${id_name}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems = (
    <>
      <Link
        onClick={() => scroll("banner")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        Home
      </Link>
      <Link
        onClick={() => scroll("about")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        About Me
      </Link>
      <Link
        onClick={() => scroll("education")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        Education
      </Link>
      <Link
        onClick={() => scroll("skills")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        Skills
      </Link>
      <Link
        onClick={() => scroll("projects")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        Projects
      </Link>
      <Link
        onClick={() => scroll("contact")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium uppercase"
      >
        Contact
      </Link>
    </>
  );

  return (
    <section className="bg-[#0D1322] shadow-2xl">
      <div className="navbar container mx-auto text-lg font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
            >
                  {menuItems}
            </ul>
          </div>
          <Link to='/'><img className="w-12" src={logo} alt="" /></Link>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {menuItems}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
