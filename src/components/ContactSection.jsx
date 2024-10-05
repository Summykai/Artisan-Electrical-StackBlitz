import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" style={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px'
      }}>
        <div>
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email Address" style={inputStyle} />
            <input type="tel" placeholder="Phone Number" style={inputStyle} />
            <textarea placeholder="Message" style={inputStyle} rows="5"></textarea>
            <button type="submit" className="btn" style={{ width: '100%' }}>Submit</button>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
          <div style={{ marginTop: '20px' }}>
            <p>123 Business Street, City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@business.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: 'none',
  borderRadius: '5px'
}

export default ContactSection