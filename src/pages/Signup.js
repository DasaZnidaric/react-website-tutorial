import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Signup() {
  return (
    <div style="background-color:red">
      <h1>asdfasdfsfd</h1>
      <form action="http://88.200.63.148:5000/signup" method="POST">
        <input type="password" placeholder="Enter password" name="password" />
        <input type="text" placeholder="Enter username" name="username" />
      </form>
    </div>
  );
}

export default Signup;
