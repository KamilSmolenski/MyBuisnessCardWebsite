import React from "react";
import "../styles/App.scss";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
import Me from "./Me.js";

function App() {
  return (
    <BrowserRouter>
      <div className="Page">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="main">
          <aside> {<Me />} </aside>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
