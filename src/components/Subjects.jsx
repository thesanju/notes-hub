// import React, { useState } from 'react';
import { useState } from 'react';
import './card.css'; // Import the CSS file
import Pdfview from './Pdfview';

// eslint-disable-next-line react/prop-types
function Subjects({ name, text, PdfUrl }) {
  // console.log(PdfUrl)
  const [showPdf, setShowPdf] = useState(false);

  function buttonFn() {
    setShowPdf(true);
  }

  return (
    <>
    <div className="card"> 
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{text}</p>
      <button className='button' onClick={buttonFn}>Click</button>
      </div>
      {showPdf && 
        <Pdfview PdfUrl={PdfUrl} />
      }
      </>
  );
}

export default Subjects;
