// import React from 'react';

// eslint-disable-next-line react/prop-types
const Soon = ({ releaseDate }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ fontFamily: 'YourChosenFont, sans-serif', color: '#333' }}>
        Coming Soon!
      </h2>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Exciting things are on the way. Stay tuned for our upcoming release on {releaseDate}.
      </p>
    </div>
  );
}

export default Soon;
