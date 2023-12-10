import React, { useEffect, useState } from "react";

import "./nav.css";
import logo from "./images/net.png";
import avatar from "./images/avatar.png";
function Nav() {
  const [show, handleShow] = useState(false);

  // Define handleScroll function
  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        style={{ paddingTop: 0 + "em" }}
        className="nav_logo"
        src={logo}
        alt="Netflix logo"
      />
      <img className="nav_avatar" src={avatar} alt="Avatar " />
    </div>
  );
}

export default Nav;
