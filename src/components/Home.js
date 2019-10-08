import React from 'react'
import '../styles/Home.scss'

const Home = () => (
  <main className='Home'>
    <h1>Technologies and tools</h1>
    {/* GOOGLE AND STACKOVERFLOW :) */}
    <div className='ToolList'>
      <p>
        <i class='fab fa-css3' />
        CSS3 + <i class='fab fa-sass' /> SASS + <br />
        <i class='fab fa-bootstrap' />
        Bootstrap + BEM
      </p>
      <p>
        <i class='fab fa-js-square' />
        Java Script + <i class='fab fa-react' />
        React + jQuery
      </p>
      <p>
        <i class='fab fa-npm' />
        NPM + <i class='fab fa-yarn' />
        Yarn
      </p>
      <p>
        <i class='fab fa-git' />
        GIT + <i class='fab fa-github' />
        GitHub
      </p>
      <p>Gimp</p>
    </div>
  </main>
)

export default Home
