import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoSrc, setVideoSrc] = useState('media/navvedio.mp4'); // Default video source

  const handleMenuClick = (src, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setVideoSrc(src);  // Update video source
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
              href="#room"
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
              <form>
                <select>
                  <option>Dubai International Hotel</option>
                </select>
                <label>
                  Check-in
                  <input type="date" />
                </label>
                <label>
                  Nights
                  <input type="number" min="1" defaultValue="1" />
                </label>
                <div className="room-section">
                  <h4>Room 1</h4>
                  <label style={{ color: 'black' }}>
                    Adult <span style={{ color: 'black' }}>13 + years</span>
                    <input className='room-in' type="number" min="1" defaultValue="1" style={{ color: 'black' }} />
                  </label>
                  <select className='room-in' style={{ color: 'black' }}>
                    <option >Add a child</option>
                    {/* Add options for children */}
                  </select>
                </div>
                <button className="add-room-button">+ Add Another Room</button>
                <button className="check-availability-button">Check Availability</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
