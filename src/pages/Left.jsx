import React, { useState } from 'react'
import LeftSlide from './LeftSlide'
import './Left.css'
function Left({styles}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
 
  return (
   
      <div
          className={`book-now-containers ${isExpanded ? 'expandeds' : ''}`}
          onClick={!isExpanded ? handleButtonClick : null}
          style={{...styles}} >
          {!isExpanded && (
            <span className="button-texts" style={{fontWeight:"600"}}>FEATURES</span>
          )}
          {isExpanded && (
            <div className="form-contents" onClick={handleButtonClick}>

              <LeftSlide/>
            </div>
          )}
        </div>

  )
}

export default Left
