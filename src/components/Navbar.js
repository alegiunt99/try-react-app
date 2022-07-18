import React from 'react'

const menuLinks = ['Home', 'Contacts', 'About Us', 'Enjoy', 'Offers']

function Navbar() {
  return (
    <div>
      {
        menuLinks.map((link, index) => (
          <p key={index}>
            <a href='/'> {link}</a>
          </p>
      ))
        
      }
    </div>
  )
}

export default Navbar