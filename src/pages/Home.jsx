import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src="media/navvedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#room">Room</a></li>
          <li><a href="#meet-and-greet">Meet & Greet</a></li>
          <li><a href="#lounges">Lounges</a></li>
          <li><a href="#spa">Spa</a></li>
        </ul>
      </nav>

      <div>
        <div
          className={`book-now-container ${isExpanded ? 'expanded' : ''}`}
          onClick={!isExpanded ? handleButtonClick : null}
        >
          {!isExpanded && (
            <span className="button-text">BOOK NOW</span>
          )}
          {isExpanded && (
            <div className="form-content">
              <button className="close-button" onClick={handleButtonClick}>×</button>
              <form>
                <select>
                  <option>Dublin - Dublin Airport</option>
                  {/* Add hotel options here */}
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
                    <input type="number" min="1" defaultValue="1" style={{ color: 'black' }} />
                  </label>
                  <select style={{ color: 'black' }}>
                    <option>Add a child</option>
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
