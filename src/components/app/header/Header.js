import React from 'react'
import logo from './MR_Logo.png'
import './Header.css'

const Header = ({ scrollToRef }) => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <ul className='header-items'>
      <li
        className='header-item'
        onClick={scrollToRef('player')}
      >LISTEN</li>
      <li
        className='header-item'
        onClick={scrollToRef('tour')}
      >SHOWS</li>
      <li
        className='header-item'
      >MERCH</li>
      <li
        className='header-item'
        onClick={scrollToRef('contact')}
      >CONTACT</li>
    </ul>
  </header>
)

export default Header
