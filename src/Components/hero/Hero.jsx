import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to Galaxy Panels</h1>
            <p>Your journey to the stars begins here.</p>
            <button className='btn'>Get Started <img src={darkarrow} alt="" /></button>
        </div>
    </div>
  )
}
