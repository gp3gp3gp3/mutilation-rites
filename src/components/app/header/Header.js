import React from 'react'
import logo from './MR_Logo.png'
import './Header.css'

const Header = ({ scrollToRef }) => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <ul className='header-items'>
      <li onClick={scrollToRef('player')}>Music</li>
      <li onClick={scrollToRef('tour')}>Tour</li>
      <li>Merch</li>
      <li>Contact</li>
    </ul>
  </header>
)

export default Header
