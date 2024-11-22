import React from "react";
import { Logo, LogoutBtn } from "../index.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const isUserLogedIn = useSelector((state) => state.auth.status);
  return (
    <div className="w-full bg-black h-20 flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm shadow-white/35">
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <ul className="hidden lg:flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "bg-white text-black px-2 py-1 rounded-md"
                  : "text-white"
              }  hover:underline text-lg`
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
                isActive
                  ? "bg-white text-black px-2 py-1 rounded-md"
                  : "text-white"
              }  hover:underline text-lg`
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
                isActive
                  ? "bg-white text-black px-2 py-1 rounded-md"
                  : "text-white"
              }  hover:underline text-lg`
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
                isActive
                  ? "bg-white text-black px-2 py-1 rounded-md"
                  : "text-white"
              }  hover:underline text-lg`
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
                isActive
                  ? "bg-white text-black px-2 py-1 rounded-md"
                  : "text-white"
              }  hover:underline text-lg`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="hidden lg:block">
        {isUserLogedIn ? (
          <LogoutBtn />
        ) : (
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
        )}
      </div>
      <div className="lg:hidden">
        <button className="text-white text-5xl"> &#8801; </button>
      </div>
    </div>
  );
}

export default Navbar;
