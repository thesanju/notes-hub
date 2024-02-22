// import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

// eslint-disable-next-line react/prop-types
function Pdfview() {
  const { PdfUrl } = useParams();

  return (
    <>
    <div style={{ textAlign: 'center' , marginTop: '20px' }}>
      <h2 style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 750,
        color: '#1F2544'
      }}>all the best bro 🥲</h2>
      <iframe
        title="PDF Preview"
        src={decodeURIComponent(PdfUrl)}
        width="800"
        height="900"
        style={{ border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        allow="autoplay"
      ></iframe>
    </div>
    <div>
      <Chat></Chat>
    </div>
    </>
  );
}

export default Pdfview;
