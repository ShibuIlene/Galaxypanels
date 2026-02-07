import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])


  return (
    <nav className={`container ${sticky ? 'dark-nav' : 'container'}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
        <img src={menu} alt="" className='menu'/>
    </nav>
   
  )
}
