import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '30px 0' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px'
      }}>
        <div>
          <h3>Company Name</h3>
          <p>Your trusted business partner</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#home" style={linkStyle}>Home</a></li>
            <li><a href="#services" style={linkStyle}>Services</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
            <li><a href="#testimonials" style={linkStyle}>Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Information</h3>
          <p>123 Business Street, City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@business.com</p>
        </div>
      </div>
    </footer>
  )
}

const linkStyle = {
  color: 'var(--text-color)',
  textDecoration: 'none'
}

export default Footer