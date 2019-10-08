import React from "react";
import "../styles/Me.scss";
import MyPhoto from "../me.jpeg";
const Me = () => {
  return (
    <div className="Wrapper">
      <img src={MyPhoto} alt="" />
      <div className="About">
        <p className="MyName">Kamil Smoleński</p>
        <p>Web Developer </p>
        <p>JavaScript Programmer</p>
        <div className="ContactIconsWrapper">
          <a href="https://github.com/KamilSmolenski">
            <i className="fab fa-github" />
          </a>
          <a href="https://pl.linkedin.com">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://gmail.com">
            <i className="far fa-envelope" />
          </a>
          <a href="https://www.facebook.com/ksmolensk">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="tel:+31684965392">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Me;
