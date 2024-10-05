import React from 'react'

const testimonials = [
  { name: 'John Doe', text: 'Great service!' },
  { name: 'Jane Smith', text: 'Highly recommended!' },
  { name: 'Bob Johnson', text: 'Excellent work!' },
  { name: 'Alice Brown', text: 'Very professional!' },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" style={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>What Our Clients Say</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                color: '#333',
                margin: '0 auto 15px'
              }}>
                {testimonial.name[0]}
              </div>
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection