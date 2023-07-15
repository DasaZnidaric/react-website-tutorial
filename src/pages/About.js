import React from "react";
import AboutBack from "../assets/aboutbackground.png";
import "../styles/About.css";
function About() {

  

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBack})` }}
      ></div>
      <div className="aboutBottom">
        <h1>O NAS</h1>
        <p>
          Naš cilj je narediti profesionalno in neprofesionalno terapijo
          dostopno, cenovno ugodno in priročno - tako lahko vsakdo, ki se
          spopada z življenjskimi izzivi, dobi pomoč, kadarkoli in kjerkoli.
          Nudimo individualne in skupinske ure z vsemi vrstami težav, ki jih
          želite rešiti.
        </p>
      </div>
    </div>
  );
}

export default About;
