// import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

function Pdfview() {
  const { PdfUrl } = useParams();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 750,
          color: '#1F2544'
        }}>all the best bro 🥲</h2>
        <iframe
          title="PDF Preview"
          src={decodeURIComponent(PdfUrl)}
          width="100%" 
          height="850px"
          style={{ border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
          allow="autoplay"
        ></iframe>
      </div>

      <div style={{ flex: 1, marginTop: '20px' }}>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default Pdfview;
