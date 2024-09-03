import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './Room.css';
import Card from 'react-bootstrap/Card';
import { TiExportOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';

function Rooms({styles} ) {
  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (room) => {
    setSelectedRoom(room);
    setShow(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://reservations.dubaiintlhotels.com/73455', '_blank');
  }
  const rooms = [
    { name: "DELUXE DOUBLE ROOM ",img:"https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_cb_enhanced.jpg", images:["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/3_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/1_enhanced.jpg"], price1: "01 - 03 Hours Stay", price2: "AED 420.00" , type: "slideshow"},
    { name: "DELUXE TWIN ROOM ",img:"https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_twin_cb_enhanced.jpg", video: "media/Rooms.mp4", price1: "01 - 03 Hours Stay-", price2: "AED 420.00" ,type: "video"},
    { name: "SUPERIOR DELUXE ROOM", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/superior_ca_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 455.00",type: "image" },
    { name: "EXECUTIVE ROOM ", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/executive_cb_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 508.00",type: "image" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/27_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 630.00",type: "image" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/junior_suite_ca_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 630.00",type: "image" },
    { name: "FAMILY ROOM", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/family_room_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 630.00" ,type: "image"},
    { name: "ROYAL SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/royal_suite_cb_enhanced.jpg", price1: "01 - 03 Hours Stay", price2: "AED 4200.00",type: "image" }
  ];

  return (
    <div>
      <form>
        <label style={{color:styles.color }}>
          <span style={{ marginRight: "10px" }}>EMAIL</span>
          <input type="email" style={{ paddingRight: "4em" ,borderColor:styles.color}} placeholder='Enter Your Mail'  />
        </label>
        <label style={{color:styles.color }}>
          <span style={{ marginRight: "10px" }}>CHECK_IN</span>
          <input type="date" style={{ paddingRight: "5.2em", paddingLeft: ".8em" ,borderColor:styles.color}} />
        </label>
        <label style={{color:styles.color }}>
          <span style={{ marginRight: "10px" }}>NIGHTS</span>
          <input type="number" min="1" defaultValue="1" style={{ paddingRight: "3.5em",borderColor:styles.color }} />
        </label>
        <div className="room-section">
          <Carousel indicators={false} interval={null}>
            {rooms.map((display, key) => (
              <Carousel.Item key={key}>
                <Card>
                  <img src={display.img} alt="" height={"150px"} />
                  <Card.Body >
                    <h6 className='rooom-name'>{display.name}</h6>
                    <div className='cardbody-div' >
                      <p className='price1' style={{fontWeight:"600"}}>{display.price1}</p> 
                      <p className='price2' style={{fontWeight:"600"}}>{display.price2}</p>
                    </div>
                    <div className="details-container">
                      <a href="#!" onClick={() => handleShow(display)} className="cardbody-a">
                        <TiExportOutline size={25}/>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <button className="check-availability-button" onClick={handleClick} style={{backgroundColor:styles.color,color:styles.backgroundColor,fontWeight:"600"}}>BOOK NOW</button>
      </form>

      <Modal show={show} onHide={handleClose}>
  {selectedRoom && (
    <>
      <Modal.Header >
        <Modal.Title>{selectedRoom.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        {selectedRoom.type === 'slideshow' && (
          <Carousel>
            {selectedRoom.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image} alt={`Slide ${index + 1}`} width={"100%"} />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {selectedRoom.type === 'video' && (
          <video width="100%" autoPlay muted controls>
            <source src={selectedRoom.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {selectedRoom.type === 'image' && (
          <img src={selectedRoom.img} alt={selectedRoom.name} width={"100%"} />
        )}

       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} style={{...styles}}>
          CLOSE
        </Button>
      </Modal.Footer>
    </>
  )}
</Modal>

    </div>
  );
}

export default Rooms;
