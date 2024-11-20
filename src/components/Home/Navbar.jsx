import React from "react";
import { Logo } from "../index.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-black h-20 flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm shadow-white/35">
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <ul className="flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${
                isActive && "bg-gray-600 px-2 py-1 rounded-md"
              } text-white hover:underline text-lg`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about-us"
            className={({ isActive }) =>
              ` ${
                isActive && "bg-gray-600 px-2 py-1 rounded-md"
              } text-white  hover:underline text-lg`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="our-services"
            className={({ isActive }) =>
              ` ${
                isActive && "bg-gray-600 px-2 py-1 rounded-md"
              } text-white  hover:underline text-lg`
            }
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="our-projects"
            className={({ isActive }) =>
              ` ${
                isActive && "bg-gray-600 px-2 py-1 rounded-md"
              } text-white  hover:underline text-lg`
            }
          >
            Our Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact-us"
            className={({ isActive }) =>
              ` ${
                isActive && "bg-gray-600 px-2 py-1 rounded-md"
              } text-white  hover:underline text-lg`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink
          to="login"
          className="text-white border-2 border-white px-2 py-1 rounded-md 
        font-semibold hover:text-black hover:bg-white "
        >
          Login
        </NavLink>
        <NavLink
          to="sign-up"
          className="ml-4 text-white border-2 border-white px-2 py-1 rounded-md 
        font-semibold  hover:text-black hover:bg-white"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
