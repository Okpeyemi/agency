import { React, useState } from "react";
import "./navbar.css";

import Menu from "../Menu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="poppins-regular">Adital</h1>
      </div>
      <Menu />
      <div className="button">
        <a className="poppins-bold" href="#GetStarted">
          Get Started
        </a>
      </div>
      <div className="toggleMenu">
        {toggleMenu ? (
          <i
            class="fi fi-br-cross-small"
            style={{ fontSize: "25px" }}
            onClick={() => setToggleMenu(false)}
          ></i>
        ) : (
          <i
            class="fi fi-br-menu-burger"
            style={{ fontSize: "25px" }}
            onClick={() => setToggleMenu(true)}
          ></i>
        )}
        {toggleMenu && (
          <div
            style={{ right: "5%" }}
            className="subToggleMenu scale-up-center"
          >
            <Menu />
            <a className="poppins-bold button" href="#GetStarted">
              Get Started
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
