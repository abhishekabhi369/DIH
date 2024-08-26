import React, { useState } from 'react';
import './Home.css';
import Rooms from './Rooms';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4');

  const handleMenuClick = (src, e) => {
    e.preventDefault();
    setVideoSrc(src);  
    console.log('Video Source Changed To:', src);
  };

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
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
              href="#home"
              onClick={(e) => handleMenuClick('media/navvedio.mp4', e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#room"
              onClick={(e) => handleMenuClick('media/room.mp4', e)}
            >
              Room
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#bar"
              onClick={(e) => handleMenuClick('media/oregans.mp4', e)}
            >
              Restaurants & Bars
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#meet-and-greet"
              onClick={(e) => handleMenuClick('media/meet.mp4', e)}
            >
              Meet & Greet
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#lounges"
              onClick={(e) => handleMenuClick('media/bcl.mp4', e)}
            >
              Lounges
            </a>
          </li>
          <li>
            <a
              className='link'
              href="#spa"
              onClick={(e) => handleMenuClick('media/spa.mp4', e)}
            >
              Spa & Wellness
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
            <div className="form-content">
              <button className="close-button" onClick={handleButtonClick}>×</button>
              <Rooms/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
