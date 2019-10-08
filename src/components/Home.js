import React from "react";
import "../styles/Home.scss";

const Home = () => (
  <main className="Home">
    <h1>Technologies and tools</h1>
    {/* GOOGLE AND STACKOVERFLOW :) */}
    <div className="ToolList">
      <p>
        <i className="fab fa-css3" />
        CSS3 + <i className="fab fa-sass" /> SASS + <br />
        <i className="fab fa-bootstrap" />
        Bootstrap + BEM
      </p>
      <p>
        <i className="fab fa-js-square" />
        Java Script + <i className="fab fa-react" />
        React + jQuery
      </p>
      <p>
        <i className="fab fa-npm" />
        NPM + <i className="fab fa-yarn" />
        Yarn
      </p>
      <p>
        <i className="fab fa-git" />
        GIT + <i className="fab fa-github" />
        GitHub
      </p>
      <p>Gimp</p>
    </div>
  </main>
);

export default Home;
