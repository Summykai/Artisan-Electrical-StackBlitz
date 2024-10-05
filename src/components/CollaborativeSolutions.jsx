import React from 'react'

const CollaborativeSolutions = () => {
  return (
    <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary-color)' }}>Collaborative Solutions</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} style={{
              width: '18%',
              height: '150px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '24px',
              color: '#333',
              borderRadius: '5px'
            }}>
              Project {num}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborativeSolutions