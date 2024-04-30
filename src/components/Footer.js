import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /> <FacebookIcon /> <LinkedInIcon /> <XIcon />
      </div>
      <p> &copy; 2024 vzemikniga.bg </p>
    </div>
  )
}

export default Footer
