import React from 'react'
import companyLogo from '../assets/companylogo.webp'

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 0',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <img 
          src={companyLogo}
          alt="Company Logo" 
          style={{ height: '40px' }} 
        />
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#home" style={linkStyle}>Home</a></li>
            <li><a href="#services" style={linkStyle}>Services</a></li>
            <li><a href="#testimonials" style={linkStyle}>Testimonials</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn" style={buttonStyle}>Contact</a>
      </div>
    </header>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
  fontWeight: 'bold'
}

const buttonStyle = {
  fontWeight: 'bold'
}

export default Header