import React from 'react'
import './About.css'
import aboutimg from '../../assets/about-img.jpg'
import playbtn from '../../assets/play-btn.jpg'

export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" className='about-img'/>
            <img src={playbtn} alt="" className='play-btn'/>
        </div>
        <div className="about-right">
            <h1>About Galaxy Panels</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>With a team of experienced engineers and industry experts, we specialize in designing and manufacturing cutting-edge photovoltaic technology that maximizes energy output while ensuring durability and reliability. At Galaxy Panels, we believe in innovation, quality, and customer satisfaction, striving to exceed expectations with every installation.</p>
    </div>
        </div>
            
  )
}
