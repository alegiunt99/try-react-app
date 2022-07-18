import React from 'react'

const menuLinks = ['Home, Contacts, About Us, Enjoy, Offers']

function Navbar() {
  return (
    <div>
      {
        menuLinks.filter((link, index) => (
            <p key={index}>
              {link}
            </p>
        ))
      }
    </div>
  )
}

export default Navbar