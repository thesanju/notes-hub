// import React, { useState } from 'react';
import { useState } from 'react';
import './style/card.css'; // Import the CSS file
import Pdfview from './Pdfview';
// import { Link, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Subjects({ name, text, PdfUrl }) {
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);

  function buttonFn() {
    setShowPdf(true);
    navigate(`/view/${encodeURIComponent(PdfUrl)}`);
  }

  return (
    <div className='sub-container'>
      <div className="card"> 
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{text}</p>
        <button className='button' onClick={buttonFn}>View</button>
      </div>
      {showPdf && 
        <Pdfview PdfUrl={PdfUrl} />
      }
    </div>
  );
}

export default Subjects;