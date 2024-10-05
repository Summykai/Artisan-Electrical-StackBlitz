import React from 'react'
import heroImage from '../assets/hero-image.jpg'

const HeroSection = () => {
  return (
    <section id="home" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      <div className="container">
        <h1>Welcome to Our Business</h1>
        <p>We provide top-notch services for your needs</p>
        <div>
          <a href="#services" className="btn" style={buttonStyle}>Our Services</a>
          <a href="#contact" className="btn" style={buttonStyle}>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

const buttonStyle = {
  fontWeight: 'bold',
  marginRight: '10px'
}

export default HeroSection