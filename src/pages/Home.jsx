import React, { useRef, useState } from 'react';
import './Home.css';
import Rooms from './Rooms';
import Left from './Left';
import Imp from './Imp'
import { FaAnglesDown } from "react-icons/fa6";
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [png, setpng] = useState(false)
  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4');
  const [buttonPosition, setButtonPosition] = useState({ top: '70px', left: '120px' });
  const [isTextVisible, setIsTextVisible] = useState(false);
  const impRef = useRef(null);
  const homeRef = useRef(null); 
  const handleBottomClick = () => {
    if (impRef.current) {
      impRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll back to the top of <Home />
  const handleTopClick = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const fonts = [
    'Montserrat', 'Helvetica', 'Open Sans', 'Poppins', 'Arial', 'Franklin', 'Proxima Nova'
  ];

  const taglines = [
    'Dubai International Hotel located within gateway at Dubai International Airport  T3',
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
  // const handleTaglineChange = () => {
    
  //   setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);

  // };
  const updateButtonPosition = (top, right) => {
    setButtonPosition({ top, right });
  };
  const hideMainpoint = () => {
    setIsMainpointVisible(false); // Hide mainpoint-div
  };

  const showMainpoint = () => {
    setIsMainpointVisible(true); // Show mainpoint-div
  };


  return (
    <div ref={homeRef}>
      <Container fluid style={{ paddingRight: "0", paddingLeft: "0" }}>
        <div className="home">
          <video autoPlay muted loop className="background-video" key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       
          <nav className="navbar" >
            <ul className="nav-links">
              <li className='link1'>
                <a
                  className='link'
                  href="#room"
                  onClick={(e) => handleMenuClick('media/room.mp4', e)}
                >
                  ROOMS
                </a>
              </li>
              <li className='link1' >
                <a
                  className='link '
                  href="#bar"
                  onClick={(e) => handleMenuClick('media/oregans.mp4', e)}

                >

                  RESTAURANT & BARS
                </a>
              </li>
              <li className='link1'>
                <a
                  className='link'
                  href="#meet-and-greet"
                  onClick={(e) => handleMenuClick('media/meet.mp4', e)}

                >
                  MEET & ASSIST
                </a>
              </li>
              <li className='link1'>
                <a
                  className='link'
                  href="#lounges"
                  onClick={(e) => handleMenuClick('media/bcl.mp4', e)}

                >
                  LOUNGES
                </a>
              </li>
              <li className='link1' >
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
                  <button className="close-button" onClick={handleButtonClick} style={{ top: buttonPosition.top, right: buttonPosition.right, color: styles.color }}>×</button>
                  <Rooms updateButtonPosition={updateButtonPosition} styles={styles} />

                </div>

              )}

            </div>
            {
              png ? <img src="media/trpa.png" className='png-img' /> : <></>
            }

          </div>

        </div>
        <Left  onLeftClick={hideMainpoint} onCloseClick={showMainpoint} tagline={taglines[currentTaglineIndex]} />
        {isMainpointVisible ? <div className='mainpoint-div'>
          <ul>
            <li>24-hour check-in/check-out.</li>
            <li>No immigration formalities.</li>
            <li>No visa requirement.</li>
          </ul>
        </div> : <></>}

        {/* <Bottom  onClick={handleBottomClick}/> */}

        {/* <Button className='change-tag' onClick={handleTaglineChange}>Change Tag</Button> */}
        {/* <Button className='change-tag2' >Change Color</Button> */}

      
        {/* {isTextVisible && (
          <div className='font-text '>
            {fonts.map((font, index) => (
              <div className='head-names' key={index} style={{ fontFamily: font, marginBottom: '10px' }}>
                <div style={{ color: "#603F83FF" }}>{font}</div>
                <p>ROOMS</p>
                <p>RESTAURANT & BARS</p>
                <p>MEET & ASSIST</p>
                <p>LOUNGES</p>
                <p>SPA & WELLNESS</p>
              </div>
            ))}
          </div>
        )} */}
        <div className="scroll-container">
          <button className="scroll-button" onClick={handleBottomClick}>
            Scroll Down For Important Information<FaAnglesDown />
          </button>
        </div>
        <Imp ref={impRef} handletopclick={handleTopClick}/>
      </Container>
    </div>
  );
}

export default Home;
