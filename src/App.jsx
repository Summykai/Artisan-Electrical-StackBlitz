import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CollaborativeSolutions from './components/CollaborativeSolutions'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CollaborativeSolutions />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App