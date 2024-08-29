import React, { useState } from 'react';
import './Left.css';
import LeftSlide from './LeftSlide';

function Left() {
  const [showSlide, setShowSlide] = useState(false);

  const handleClick = () => {
    setShowSlide(true);
  };

  const handleClose = () => {
    setShowSlide(false);
  };

  return (
    <div>
      
      {!showSlide && (
        <div className='left-side' onClick={handleClick}>
          <p>Features</p>
        </div>
      )}
      {/* Conditionally render LeftSlide with a close handler */}
      {showSlide && <LeftSlide onClose={handleClose} />}
    </div>
  );
}

export default Left;
