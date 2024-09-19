import React, { useState } from 'react';
import LeftSlide from './LeftSlide';
import './Left.css';


function Left({ tagline }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`book-now-containers ${isExpanded ? 'expandeds' : ''}`}
      onClick={!isExpanded ? handleButtonClick : null}
      style={{backgroundColor:"rgba(96, 63, 131,.8)"}}
    >
      {!isExpanded && ( 
        <span className="button-texts" style={{ fontWeight: "600" }}>FEATURES</span>
      )}
      {isExpanded && (
        <div className="form-contents" >
          <button className="close-buttons" onClick={handleButtonClick}>×</button>
          <div className="left-slide-container" >
            <LeftSlide tagline={tagline}  />
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
