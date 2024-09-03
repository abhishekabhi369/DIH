import React, { useState } from 'react';
import './Home.css';
import Rooms from './Rooms';
import Left from './Left';
import Button from 'react-bootstrap/esm/Button';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4');
  const [buttonPosition, setButtonPosition] = useState({ top: '70px', left: '120px' });
  const [isTransparent, setIsTransparent] = useState(false); 
  const [styles, setStyles] = useState({
    backgroundColor: '#141e65', 
    color: '#fefaef' 
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
  const handleButtonClickColor5 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor6 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor7 = (bgColor, textColor) => {
    setStyles({
      backgroundColor: bgColor,
      color: textColor
    });
  };
  const handleButtonClickColor8 = (bgColor, textColor) => {
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
      
<img src="media/trpa.png"  className='png-img' />
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
              <button className="close-button" onClick={handleButtonClick}  style={{ top: buttonPosition.top, right: buttonPosition.right ,color:styles.color}}>×</button>
              <Rooms updateButtonPosition={updateButtonPosition} styles={styles} />
            </div>
          )}
        </div>
      </div>
    </div>
    <Left styles={styles}  isTransparent={isTransparent} setIsTransparent={setIsTransparent} />
    <Button className='transparent' onClick={() => setIsTransparent(!isTransparent)}>Transparent</Button>
            <Button className='button-color1 '   onClick={() => handleButtonClickColor('#a7956d', 'white')} style={{backgroundColor:"#a7956d",border:"none"}}>Color 1</Button>
            <Button className='button-color2 btn-light'  onClick={() => handleButtonClickColor2('#996b56', '#0b0603')} style={{backgroundColor:"#996b56",border:"none"}}>Color 2</Button>
            <Button className='btn btn-dark button-color4' onClick={() => handleButtonClickColor4('#603F83FF', '#C7D3D4FF')}  style={{backgroundColor:"#603F83FF",color:"#C7D3D4FF",border:"none"}}>Color3</Button>
            <Button className='button-color3' onClick={() => handleButtonClickColor3('#141e65', '#fefaef')} style={{backgroundColor:"#141e65",border:"none"}}>Default</Button>
            <Button className='button-color5' onClick={() => handleButtonClickColor5('#45291e', 'white')} style={{backgroundColor:"#45291e",color:"white",border:"none"}}>Color4</Button>
            <Button className='button-color6' onClick={() => handleButtonClickColor6('#77a9cc', '#3d240d')} style={{backgroundColor:"#77a9cc",color:"#3d240d",border:"none"}}>Color5</Button>
            <Button className='button-color7' onClick={() => handleButtonClickColor7('#00203FFF', '#ADEFD1FF')} style={{backgroundColor:"#00203FFF",color:"#ADEFD1FF",border:"none"}}>Color6</Button>
            <Button className='button-color8' onClick={() => handleButtonClickColor8('#353148', 'rgb(215, 196, 158)')} style={{backgroundColor:"#353148",color:"rgb(215, 196, 158)",border:"none"}}>Color7</Button>
    </div>
  );
}

export default Home;
