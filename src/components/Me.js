import React from 'react'
import '../styles/Me.scss'
import MyPhoto from '../me.jpg'
import { HashRouter, NavLink } from 'react-router-dom'
const Me = () => {
  return (
    <div className='Wrapper'>
      <img src={MyPhoto} alt='' />
      <div className='About'>
        <p className='MyName'>Kamil Smoleński</p>
        <p>Web Developer </p>
        <p>JavaScript Programmer</p>
        <div className='ContactIconsWrapper'>
          <a href='tel:+48576024660'>
            <i className='fas fa-phone-alt' />
          </a>
          <HashRouter>
            <NavLink to='/contact'>
              <i className='far fa-envelope' />
            </NavLink>
          </HashRouter>
          <a href='https://github.com/KamilSmolenski'>
            <i className='fab fa-github' />
          </a>
          <a href='https://linkedin.com/in/kamil-smolenski-06a8a8195'>
            <i className='fab fa-linkedin' />
          </a>

          <a href='https://www.facebook.com/ksmolensk'>
            <i className='fab fa-facebook-f' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Me
