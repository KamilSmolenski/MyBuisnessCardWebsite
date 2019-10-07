import React from 'react'
import '../styles/Me.scss'
import MyPhoto from '../me.jpeg'
const Me = () => {
  return (
    <div className='Wrapper'>
      <img src={MyPhoto} alt='' />
      <div className='About'>
        <p>Kamil Smoleński</p>
        <p>Web Developer </p>
        <p>JavaScript Programmer</p>
      </div>
    </div>
  )
}

export default Me
