import React from 'react'
import '../styles/Me.scss'
import MyPhoto from '../me.jpeg'
const Me = () => {
  return (
    <div className='Wrapper'>
      <img src={MyPhoto} alt='' />
      <div className='About'>
        <p className='MyName'>Kamil Smoleński</p>
        <p>Web Developer </p>
        <p>JavaScript Programmer</p>
        <div className='ContactIconsWrapper'>
          <a href='https://github.com/KamilSmolenski'>
            <i class='fab fa-github' />
          </a>
          <a href='https://pl.linkedin.com'>
            <i class='fab fa-linkedin' />
          </a>
          <a href='https://gmail.com'>
            <i class='far fa-envelope' />
          </a>
          <a href='https://www.facebook.com/ksmolensk'>
            <i class='fab fa-facebook-f' />
          </a>
          <a href='tel:+31684965392'>
            <i class='fab fa-whatsapp' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Me
