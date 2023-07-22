import React from "react";
import "../styles/Register.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Register() {
  return (
    <div className="reg">
      <h1>Sign up</h1>
      <form action="http://88.200.63.148:5000/register" method="POST">
        <input
          type="text"
          placeholder="Vnesite uporabniško ime"
          name="username"
        />
        <input type="email" placeholder="Vnesite email" name="email" />

        <p>Vaš spol?</p>
        <input type="radio" name="gender" id="male" value="male" />
        <label for="male" className="g">
          Moški
        </label>
        <input type="radio" name="gender" id="female" value="female" />
        <label for="female" className="g">
          Ženska
        </label>

        <p>Koliko ste stari?</p>
        <input type="radio" id="child" name="age" value="child" />
        <label htmlFor="child" className="g">
          0 - 17 let
        </label>
        <input type="radio" id="adult" name="age" value="adult" />
        <label htmlFor="adult" className="g">
          18 - 64 let
        </label>
        <input type="radio" id="senior" name="age" value="senior" />
        <label htmlFor="senior" className="g">
          65 let ali več
        </label>
        <br />

        <input type="password" placeholder="Vnesite geslo" name="password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Register;
