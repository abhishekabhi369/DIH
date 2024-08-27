import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Room.css'
import Card from 'react-bootstrap/Card';
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function Rooms({ updateButtonPosition }) {
  const key='somekey';
  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://reservations.dubaiintlhotels.com/73455', '_blank');
  }
  const [expandedSlide, setExpandedSlide] = useState(null);
  const toggleDetails = (index) => {
    if (expandedSlide === index) {
      setExpandedSlide(null);
      updateButtonPosition('100px','') 

    } else {
      setExpandedSlide(index); 
      updateButtonPosition('60px','')
    }
  };
  const rooms = [{
    name: "Deluxe Double Room Terminal3 Near Gate B14/B22 or A1/A24", img: "media/room.mp4",
    price1: "01 - 03 Hours Stay-",price2:"AED 420.00", details: "The perfect hideaway within a busy Airport Terminal, our Deluxe rooms offer total comfort and privacy for the transiting traveller.Ranging from 32 – 39 square meters, you can choose from 184 rooms that offer queen size beds or 69 rooms which offer twin beds.A spacious bathroom with shower complete with all amenities.A Queen Size win bed with an orthopedic mattress and down pillows to provide you with that well deserved rest prior to your next flight.An in-room mini refrigerator, Electronic Safety Deposit Box, Tea/Coffee Facilities, LCD TV, International Direct Dial Telephones and a comfortable writing desk.24 hours Room Service.Express check in and check out"
  }, {
    name: "Deluxe Twin Room Terminal3 Near Gate B14/B22 or A1/A24",
     img: "media/spa.mp4", price1: "01 - 03 Hours Stay-",price2:"AED 420.00", details: "The perfect hideaway within a busy Airport Terminal, our Deluxe rooms offer total comfort and privacy for the transiting traveller.Ranging from 32 – 39 square meters, you can choose from 184 rooms that offer queen size beds or 69 rooms which offer twin beds.A spacious bathroom with shower complete with all amenities.A Queen Size win bed with an orthopedic mattress and down pillows to provide you with that well deserved rest prior to your next flight.An in-room mini refrigerator, Electronic Safety Deposit Box, Tea/Coffee Facilities, LCD TV, International Direct Dial Telephones and a comfortable writing desk.24 hours Room Service.Express check in and check out"
  }, {
    name: "Superior Deluxe Room Terminal 3 Near Gate A1 or A24", img: "media/meet.mp4", price1: "01 - 03 Hours Stay-",price2:"AED 420.00", details: "The perfect hideaway within a busy Airport Terminal, our Deluxe rooms offer total comfort and privacy for the transiting traveller.Ranging from 32 – 39 square meters, you can choose from 184 rooms that offer queen size beds or 69 rooms which offer twin beds.A spacious bathroom with shower complete with all amenities.A Queen Size win bed with an orthopedic mattress and down pillows to provide you with that well deserved rest prior to your next flight.An in-room mini refrigerator, Electronic Safety Deposit Box, Tea/Coffee Facilities, LCD TV, International Direct Dial Telephones and a comfortable writing desk.24 hours Room Service.Express check in and check out"
  }]

  return (
    <div>
      <form>
        <label >
          <span style={{ marginRight: "10px" }}>Email</span>
          <input type="email" style={{ paddingRight: "4em" }} placeholder='Enter Your Mail' />
        </label>
        <label >
          <span style={{ marginRight: "10px" }}>Check-in</span>
          <input type="date" style={{ paddingRight: "5.2em", paddingLeft: ".8em" }} />
        </label>
        <label>
          <span style={{ marginRight: "10px" }}>Nights</span>
          <input type="number" min="1" defaultValue="1" style={{ paddingRight: "3.5em" }} />
        </label>
        <div className="room-section">
          <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
            { 
              rooms.map((display,key) =>
                <SwiperSlide key={key}>
                  <Card style={{ width: '18rem' }}>
                    <video autoPlay muted loop key={display.img}>
                      <source src={display.img} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <Card.Body>
                      <h6 className='rooom-name'>{display.name}</h6>
                      <div className='cardbody-div' style={{display:"flex"}}>
                      <p className='price1'>{display.price1}</p> <p className='price2'>{display.price2}</p>
                      </div>
                      {expandedSlide === key ? (
                <div className="details-container">
                  <p className='body-para'>{display.details}</p>
                  <a href="#!" onClick={() => toggleDetails(key)} className="cardbody-a">
                    <CiCircleChevUp size={20} />
                  </a>
                </div>
              ) : (
                <a href="#!" onClick={() => toggleDetails(key)} className="cardbody-a">
                  More <CiCircleChevDown size={20} />
                </a>
              )}
                    </Card.Body>
                  </Card>

                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
        <button className="check-availability-button" onClick={handleClick} >Book Now</button>
      </form>
    </div>
  )
}

export default Rooms
