// import React from 'react';
import { Link } from 'react-router-dom';
import './selectsem.css'

function Selectsem() {
  return (
    <div className='container'>
      <div className='button-pair'>
      </div>
      <div className='button-pair'>
        <Link to="/semester/1" className='home-button'>sem1</Link>
        <Link to="/semester/2" className='home-button'>sem2</Link>
      </div>
      <div className='button-pair'>
        <Link to="/semester/3" className='home-button'>sem3</Link>
        <Link to="/semester/4" className='home-button'>sem4</Link>
      </div>
      <div className='button-pair'>
        <Link to="/semester/5" className='home-button'>sem5</Link>
        <Link to="/semester/6" className='home-button'>sem6</Link>
      </div>
    </div>
  );
}

export default Selectsem;
