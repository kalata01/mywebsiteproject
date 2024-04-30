import React from 'react'
import ContactLeft from "../assets/contact.png"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
        style={{ backgroundImage: `url(${ContactLeft})` }}>
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'> Full Name </label>
          <input name='name' placeholder='Please enter your full name:' type='text' />
          <label htmlFor='mail'> E-mail </label>
          <input name='mail' placeholder='Please enter your e-mail address:' type='email' />
          <label htmlFor='message'> Message </label>
          <textarea rows="6" placeholder='How can we help you?' name='message' required> </textarea>
          <button type='submit'> Submit </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
