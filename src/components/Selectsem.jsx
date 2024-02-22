// import React from 'react';
import { Link } from 'react-router-dom';
import './style/selectsem.css'

function Selectsem() {
  return (
    <div className='container'>
      <div className='button-pair'>
      </div>
      <div className='button-pair'>
        <Link to="/semester/1" className='home-button'>semester 1</Link>
        <Link to="/semester/2" className='home-button'>semester 2</Link>
      </div>
      <div className='button-pair'>
        <Link to="/semester/3" className='home-button'>semester 3</Link>
        <Link to="/semester/4" className='home-button'>semester 4</Link>
      </div>
      <div className='button-pair'>
        <Link to="/semester/5" className='home-button'>semester 5</Link>
        <Link to="/semester/6" className='home-button'>semester 6</Link>
      </div>
      <div className='button-pair'>
        <Link to="/semester/5" className='home-button'>semester 7</Link>
        <Link to="/semester/6" className='home-button'>semester 8</Link>
      </div>
    </div>
  );
}

export default Selectsem;
