import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/home"> Domov </Link>
          <Link to="/about"> O nas </Link>
          <Link to="/contact"> Kontakt </Link>
          <Link to="/register"> Registracija </Link>
          <Link to="/"> Prijava </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/home"> Domov </Link>
        <Link to="/about"> O nas </Link>
        <Link to="/contact"> Kontakt </Link>
        <Link to="/register"> Registracija </Link>
        <Link to="/"> Prijava </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
