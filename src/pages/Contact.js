import React from "react";
import ContactLeft from "../assets/contactlogo.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Kontaktirajte nas</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Ime in Priimek</label>
          <input name="name" placeholder="Vnesite celotno ime..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Vnesite email..." type="email" />
          <label htmlFor="message">Sporočilo</label>
          <textarea
            rows="6"
            placeholder="Vnesite sporočilo..."
            name="message"
            required
          ></textarea>
          <button type="submit">Pošlji sporočilo</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
