import React, { useState } from 'react';
import LeftSlide from './LeftSlide';
import './Left.css';


function Left({ styles, isTransparent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`book-now-containers ${isExpanded ? 'expandeds' : ''}`}
      onClick={!isExpanded ? handleButtonClick : null}
      style={{
        ...styles,
        backgroundColor: isTransparent ? 'rgba(20, 30, 101, 0.5)' : styles.backgroundColor,
      }}
    >
      {!isExpanded && (
        <span className="button-texts" style={{ fontWeight: "600" }}>FEATURES</span>
      )}
      {isExpanded && (
        <div className="form-contents">
          <button className="close-buttons" onClick={handleButtonClick}>×</button>
          <div className="left-slide-container" style={{ backgroundColor: 'transparent' }}>
            <LeftSlide styles={styles}  />
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
