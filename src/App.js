import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
const Home = () => <h1>Strona Startowa</h1>
const News = () => <h1>Aktualnosci</h1>
const Contact = () => <h1>Kontakt</h1>

function App () {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Start</Link>
              </li>
              <li>
                <Link to='/news'>Aktualnosci</Link>
              </li>
              <li>
                <Link to='/contact'>Kontakt</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
