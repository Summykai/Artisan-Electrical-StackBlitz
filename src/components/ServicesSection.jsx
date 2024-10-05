import React from 'react'

const services = [
  { title: 'Service 1', description: 'Description of service 1' },
  { title: 'Service 2', description: 'Description of service 2' },
  { title: 'Service 3', description: 'Description of service 3' },
]

const ServicesSection = () => {
  return (
    <section id="services" style={{ backgroundColor: 'white', padding: '50px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Services</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                color: '#333'
              }}>
                {service.title}
              </div>
              <div style={{ padding: '20px' }}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" style={{ color: 'var(--primary-color)' }}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection