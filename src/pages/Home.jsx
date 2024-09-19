import React, { useState } from 'react';
import './Home.css';
import Rooms from './Rooms';
import Left from './Left';
import Button from 'react-bootstrap/esm/Button';
import Bottom from './Bottom';


function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [png, setpng] = useState(false)
  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4');
  const [buttonPosition, setButtonPosition] = useState({ top: '70px', left: '120px' }); 
  const [isTextVisible, setIsTextVisible] = useState(false);

  const fonts = [
    'Montserrat', 'Helvetica', 'Open Sans', 'Poppins', 'Arial', 'Franklin', 'Proxima Nova'
  ];

  const taglines = [
    'Dubai International Hotel located within gateway at Dubai International Airport T3',
    'Dubai International Hotel - A Safe and Comfortable Hotel at the Airport',
    'Dubai International Hotel nestled in the Heart of Dubai Airport',
    'Dubai International Hotel - Right at the DXB Airport',
    'Dubai International Hotel: Your comfortable and convenient retreat located right inside Dubai Airport.',
    'Dubai International Hotel: Located in the Heart of Dubai Airport',
    'The Travelers Retreat at Dubai International Airport T3'
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
    const [isMainpointVisible, setIsMainpointVisible] = useState(true);
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
    setpng(!png)
  };
  const updateButtonPosition = (top, right) => {
    setButtonPosition({ top, right });
  };

  const handleBottomClick = () => {
    setIsMainpointVisible(!isMainpointVisible); 
  };
  const handleTaglineChange = () => {
    
    setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);

  };

    const handleFontButtonClick = () => {
      setIsTextVisible(!isTextVisible);
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
             
            >
              ROOMS
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#bar"
              onClick={(e) => handleMenuClick('media/oregans.mp4', e)}
              
            >   
             
              RESTAURANT & BARS
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#meet-and-greet"
              onClick={(e) => handleMenuClick('media/meet.mp4', e)}
             
            >
             MEET & ASSIST
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#lounges"
              onClick={(e) => handleMenuClick('media/bcl.mp4', e)}
              
            >
              LOUNGES
            </a>
          </li>
          <li >
            <a
              className='link'
              href="#spa"
              onClick={(e) => handleMenuClick('media/spa.mp4', e)}
             
            >
            SPA & WELLNESS
            </a>
          </li>
        </ul>
      </nav>
     
      <div>
        <div
          className={`book-now-container ${isExpanded ? 'expanded' : ''}`}
          onClick={!isExpanded ? handleButtonClick : null} 
        >
          {!isExpanded && (
            <span className="button-text" >BOOK NOW</span>
          )}
          {isExpanded && (
            <div className="form-content" >
              <button className="close-button" onClick={handleButtonClick}  style={{ top: buttonPosition.top, right: buttonPosition.right ,color:styles.color}}>×</button>
              <Rooms updateButtonPosition={updateButtonPosition} styles={styles} />
             
            </div>
             
          )}
              
        </div>
        {
          png ? <img src="media/trpa.png"  className='png-img' /> : <></>
        }
        
      </div>
      
    </div>
    <Left   tagline={taglines[currentTaglineIndex]}/>
    {isMainpointVisible ?  <div className='mainpoint-div'>
          <ul>
            <li>24-hour check-in/check-out.</li>
            <li>No immigration formalities.</li>
            <li>No visa requirement.</li>
          </ul>
        </div>: <></>}

      <Bottom  onClick={handleBottomClick}/>
      <Button className='change-tag' onClick={handleTaglineChange}>Change Tag</Button>
      <Button className='change-tag2' >Change Color</Button>
      
     <Button className='font-toggle-button' onClick={handleFontButtonClick}>
        Toggle Fonts
      </Button>


      {isTextVisible && (
        <div className='font-text '>
          {fonts.map((font, index) => (
            <div className='head-names' key={index} style={{ fontFamily: font, marginBottom: '10px' }}>
              <div style={{color:"#603F83FF"}}>{font}</div>
              <p>ROOMS</p>
              <p>RESTAURANT & BARS</p>
              <p>MEET & ASSIST</p>
              <p>LOUNGES</p>
              <p>SPA & WELLNESS</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
