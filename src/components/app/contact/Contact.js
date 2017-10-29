import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='container'>
        <ul>
          <li className='contact'>General: <a href='mailto:band@mutilationrites.com'>band@mutilationrites.com</a></li>
          <li className='contact'>Label: <a href='mailto:adam@gileadmedia.net'>adam@gileadmedia.net</a></li>
          <li className='contact'>US Booking: <a href='mailto:angela@tonedeaftouring.com'>angela@tonedeaftouring.com</a></li>
          <li className='contact'>European Booking: <a href='mailto:info@argentorecords.com'>info@argentorecords.com</a></li>
        </ul>
      </div>
    )
  }
}

export default Contact
