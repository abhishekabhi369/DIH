import React, { useState } from 'react'
import LeftSlide from './LeftSlide';
import './Bottom.css'
import Imp from './Imp';
function Bottom({ onClick }) {
    const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
    onClick(); 
  };

  return (
    <div
    className={`book-now-containers1 ${isExpanded ? 'expandeds1' : ''}`}
    onClick={!isExpanded ? handleButtonClick : null} 
    style={{backgroundColor:"rgba(96, 63, 131,.8)"}}
    
  >
    {!isExpanded && ( 
      <span className="button-texts1" style={{ fontWeight: "600" }}>IMPORTANT INFORMATION</span>
    )}
    {isExpanded && (
      <div className="form-contents1" >
        <button className="close-buttons1" onClick={handleButtonClick}>×</button>
        <div className="left-slide-container" >
        <Imp/>
        </div>
      </div>
    )}
  </div>
  )
}

export default Bottom
