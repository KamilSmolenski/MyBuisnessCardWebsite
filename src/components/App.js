import React from 'react'
import '../styles/App.scss'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from "./Home.js"
import Contact from "./Contact.js"
import Projects from "./Projects.js"


function App () {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
