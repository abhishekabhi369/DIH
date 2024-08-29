import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './Room.css';
import Card from 'react-bootstrap/Card';
import { TiExportOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';

function Rooms() {
  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (room) => {
    setSelectedRoom(room);
    setShow(true);
  };

  const rooms = [
    { name: "Deluxe Double Room ",img:"https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_cb_enhanced.jpg", images:["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/3_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/1_enhanced.jpg"], price1: "01 - 03 Hours Stay-", price2: "AED 420.00" , type: "slideshow"},
    { name: "Deluxe Twin Room ",img:"https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_twin_cb_enhanced.jpg", video: "media/Rooms.mp4", price1: "01 - 03 Hours Stay-", price2: "AED 420.00" ,type: "video"},
    { name: "Superior Deluxe Room", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/superior_ca_enhanced.jpg", price1: "01 - 03 Hours Stay-", price2: "AED 455.00",type: "image" },
    { name: "Executive Room ", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/executive_cb_enhanced.jpg", price1: "01 - 03 Hours Stay-", price2: "AED 508.00",type: "image" },
    { name: "Junior Suite", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/27_enhanced.jpg", price1: "01 - 03 Hours Stay-", price2: "AED 630.00",type: "image" },
    { name: "Family Room ", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/family_room_enhanced.jpg", price1: "01 - 03 Hours Stay-", price2: "AED 630.00" ,type: "image"},
    { name: "Royal Suite", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/royal_suite_cb_enhanced.jpg", price1: "01 - 03 Hours Stay-", price2: "AED 4200.00",type: "image" }
  ];

  return (
    <div>
      <form>
        <label>
          <span style={{ marginRight: "10px" }}>Email</span>
          <input type="email" style={{ paddingRight: "4em" }} placeholder='Enter Your Mail' />
        </label>
        <label>
          <span style={{ marginRight: "10px" }}>Check-in</span>
          <input type="date" style={{ paddingRight: "5.2em", paddingLeft: ".8em" }} />
        </label>
        <label>
          <span style={{ marginRight: "10px" }}>Nights</span>
          <input type="number" min="1" defaultValue="1" style={{ paddingRight: "3.5em" }} />
        </label>
        <div className="room-section">
          <Carousel indicators={false} interval={null}>
            {rooms.map((display, key) => (
              <Carousel.Item key={key}>
                <Card>
                  <img src={display.img} alt="" height={"150px"} />
                  <Card.Body>
                    <h6 className='rooom-name'>{display.name}</h6>
                    <div className='cardbody-div' style={{ display: "flex" }}>
                      <p className='price1'>{display.price1}</p> <p className='price2'>{display.price2}</p>
                    </div>
                    <div className="details-container">
                      <a href="#!" onClick={() => handleShow(display)} className="cardbody-a">
                        {/* <CiCircleChevUp size={20} /> */}
                        <TiExportOutline size={25}/>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </form>

      <Modal show={show} onHide={handleClose}>
  {selectedRoom && (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{selectedRoom.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Render slideshow, video, or single image based on the type */}
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

        <div className="room-details">
          <p><strong>Price for 01 - 03 Hours Stay:</strong> {selectedRoom.price1} {selectedRoom.price2}</p>
          {selectedRoom.details && <p><strong>Details:</strong> {selectedRoom.details}</p>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  )}
</Modal>

    </div>
  );
}

export default Rooms;
