import React, { useState } from 'react';
import './Home.css';
import Rooms from './Rooms';
import Left from './Left';
import Button from 'react-bootstrap/esm/Button';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4');
  const [buttonPosition, setButtonPosition] = useState({ top: '70px', left: '120px' });
  const [styles, setStyles] = useState({
    backgroundColor: '#141e65', // Default background color
    color: '#fefaef' // Default text color
  });

  const handleMenuClick = (src, e) => {
    e.preventDefault();
    setVideoSrc(src);  
    console.log('Video Source Changed To:', src);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  const updateButtonPosition = (top, right) => {
    setButtonPosition({ top, right });
  };
  const handleButtonClickColor = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor2 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor3 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor4 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  return (
    <div>
    <div className="home">
     <video autoPlay muted loop className="background-video" key={videoSrc}>
  <source src={videoSrc} type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <nav className="navbar">
        <ul className="nav-links">
      
          <li>
            <a
              className='link'
              href="#room"
              onClick={(e) => handleMenuClick('media/room.mp4', e)}
              style={{color:styles.color }}
            >
              ROOM
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#bar"
              onClick={(e) => handleMenuClick('media/oregans.mp4', e)}
              style={{color:styles.color }}
            >
             
              RESTAURANT&BARS
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#meet-and-greet"
              onClick={(e) => handleMenuClick('media/meet.mp4', e)}
              style={{color:styles.color }}
            >
             MEET&GREET
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#lounges"
              onClick={(e) => handleMenuClick('media/bcl.mp4', e)}
              style={{color:styles.color }}
            >
              LOUNGES
            </a>
          </li>
          <li >
            <a
              className='link'
              href="#spa"
              onClick={(e) => handleMenuClick('media/spa.mp4', e)}
              style={{color:styles.color }}
            >
            SPA&WELLNESS
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <div
          className={`book-now-container ${isExpanded ? 'expanded' : ''}`}
          onClick={!isExpanded ? handleButtonClick : null} style={{...styles}}
        >
          {!isExpanded && (
            <span className="button-text" >BOOK NOW</span>
          )}
          {isExpanded && (
            <div className="form-content" style={{...styles}}>
              <button className="close-button" onClick={handleButtonClick}  style={{ top: buttonPosition.top, right: buttonPosition.right }}>×</button>
              <Rooms updateButtonPosition={updateButtonPosition} styles={styles} />
            </div>
          )}
        </div>
      </div>
     
    </div>
    <Left styles={styles}/>
            <Button className='button-color1 '   onClick={() => handleButtonClickColor('#a7956d', 'white')} style={{backgroundColor:"#a7956d",border:"none"}}>Color 1</Button>
            <Button className='button-color2 btn-light'  onClick={() => handleButtonClickColor2('#996b56', '#0b0603')} style={{backgroundColor:"#996b56",border:"none"}}>Color 2</Button>
           <Button className='btn btn-dark button-color4' onClick={() => handleButtonClickColor4('white', 'black')}  style={{backgroundColor:"black",border:"none"}}>Color3</Button>
            <Button className='button-color3' onClick={() => handleButtonClickColor3('#141e65', '#fefaef')} style={{backgroundColor:"#141e65",border:"none"}}>Default</Button>
            
    </div>
  );
}

export default Home;
