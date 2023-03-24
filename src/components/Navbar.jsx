import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const w = true;
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-0 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={function () {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain  transition duration-1000ms hover:scale-110"
          ></img>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10  z-30">
          {navLinks.map((link) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px] hover:text-white  `}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}>{`${link.title}`}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer items-center"
            onClick={function () {
              setToggle(!toggle);
            }}
          ></img>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } top-12 right-0 p-6 black-gradient absolute mx-2 my-4 min-w-[120px] rounded-xl`}
          >
            {" "}
            <ul className="list-none flex justify-end flex-col items-start z-30">
              {navLinks.map((link) => (
                <li
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white hover:text-[18px] `}
                  onClick={() => {
                    // setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>{`${link.title}`}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
