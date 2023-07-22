import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

function Signin() {
  return (
    <div className="sign">
      <h1>Prijava</h1>
      <form action="http://88.200.63.148:5000/signin" method="POST">
        <input
          type="text"
          placeholder="Vnesite uporabniško ime"
          name="username"
        />
        <input type="password" placeholder="Vnesite geslo" name="password" />
        <Link to="/register"> Še nimate računa? Prijavite se tukaj. </Link>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Signin;
