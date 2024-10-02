import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './Room.css';
import Card from 'react-bootstrap/Card';
import { TiExportOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
function Rooms({ styles }) {
  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hours, setHours] = useState("01 - 03 Hours Stay");
  const [price, setPrice] = useState(""); 
  const handleClose = () => setShow(false);

  const handleShow = (room) => {
    setSelectedRoom(room);
    setPrice(room.prices[hours]);  
    setShow(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://reservations.dubaiintlhotels.com/73455', '_blank');
  };

  const handleHoursChange = (event) => {
    const selectedHours = event.target.value;
    setHours(selectedHours);

    if (selectedRoom) {
 
      setPrice(selectedRoom.prices[selectedHours]);
    }
  };

  const rooms = [
    {
      name: "DELUXE DOUBLE ROOM",
      img: "images/room.jpg",
      images: [
        "images/room.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg",
        ,"https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg",
        "images/room.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg",

      ],
      prices: {
        "Advance Purchase - 24 Hours Stay": " AED 977.50 ",
        "01 - 03 Hours Stay": " AED 403 ",
        "04 - 06 Hours Stay": " AED 690 ",
        "07 - 12 Hours Stay": " AED 805 ",
        "13 - 18 Hours Stay": "AED 977.50 ",
        "19 to 24 Hours Stay": "AED 1150 "
      },
      type: "slideshow"
    },
    {
      name: "DELUXE TWIN ROOM",
      img: "images/room.jpg",
      images: [
        "images/room.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg",
        "images/room.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"
      ],
      prices: {
        "Advance Purchase - 24 Hours Stay": "AED 977.50 ",
        "01 - 03 Hours Stay": "AED 403 ",
        "04 - 06 Hours Stay": "AED 690 ",
        "07 - 12 Hours Stay": "AED 805 ",
        "13 - 18 Hours Stay": "AED 977.50 ",
        "19 to 24 Hours Stay": " AED 1150 "
      },
      type: "slideshow"
    },
    { name: "SUPERIOR DELUXE ROOM", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/superior_ca_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/19_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/21_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/20_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"],
      prices: {
        "Advance Purchase - 24 Hours Stay": "AED 1062.50 ",
        "01 - 03 Hours Stay": "AED 438 ",
        "04 - 06 Hours Stay": " AED 750 ",
        "07 - 12 Hours Stay": "AED 875 ",
        "13 - 18 Hours Stay": "AED 1062.50 ",
        "19 to 24 Hours Stay": "AED 1250 "
      }, type: "slideshow" },
    { name: "EXECUTIVE ROOM ", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/executive_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/9_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/8_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"],  prices: {
      "Advance Purchase - 24 Hours Stay": "AED 1190.50 ",
      "01 - 03 Hours Stay": "AED 490 ",
      "04 - 06 Hours Stay": "AED 840 ",
      "07 - 12 Hours Stay": "AED 980 ",
      "13 - 18 Hours Stay": "AED 1190 ",
      "19 to 24 Hours Stay": "AED 1400 "
    }, type: "slideshow" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/junior_suite_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/25_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/26_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/27_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"],  prices: {
      
      "01 - 03 Hours Stay": "AED 630 ",
      "04 - 06 Hours Stay": "AED 1080 ",
      "07 - 12 Hours Stay": "AED 1260 ",
      "13 - 18 Hours Stay":  "AED 1530 ",
      "19 to 24 Hours Stay": "AED 1800 "
    }, type: "slideshow" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/junior_suite_ca_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/12_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/10_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/11_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"], prices: {
      "01 - 03 Hours Stay": "AED 630 ",
      "04 - 06 Hours Stay": "AED 1080 ",
      "07 - 12 Hours Stay": "AED 1260 ",
      "13 - 18 Hours Stay": "AED 1530 ",
      "19 to 24 Hours Stay": "AED 1800 "
    }, type: "slideshow" },
    { name: "FAMILY ROOM", img: "images/room.jpg",
       images: ["images/room.jpg", "images/room.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg", "images/room.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg", "images/room.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"], 
       prices: { 
      "01 - 03 Hours Stay": "603.75 AED",
      "04 - 06 Hours Stay": "1104 AED",
      "07 - 12 Hours Stay": "1288 AED",
      "13 - 18 Hours Stay": "1661.50 AED",
      "19 to 24 Hours Stay": "1955 AED"
    }, type: "slideshow" },
    { name: "ROYAL SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/royal_suite_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/13_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/15_enhanced.jpg","https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/18_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/17_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/16_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/14_enhanced.jpg"], prices: {
      
      "07 - 12 Hours Stay": "AED 4200 ",
      "13 - 18 Hours Stay": "AED 5100 ",
      "19 to 24 Hours Stay": "AED 6000 "
    }, type: "slideshow" }

  ];

  return (
    <div>
      <form>
        <label style={{ color: styles.color }}>
          <span style={{ marginRight: "10px" }}>EMAIL</span>
          <input type="email" style={{ paddingRight: "4em", borderColor: styles.color }} placeholder='Enter Your Mail' />
        </label>
        <label style={{ color: styles.color }}>
          <span style={{ marginRight: "10px" }}>CHECK IN</span>
          <input type="date" style={{ paddingRight: "5.2em", paddingLeft: ".8em", borderColor: styles.color }} />
        </label>
        <label style={{ color: styles.color }}>
          <span style={{ marginRight: "10px" }}>HOURS</span>
          <select value={hours} onChange={handleHoursChange} style={{ paddingRight: "3.5em", backgroundColor: "#603F83FF" }}>

            <option value="Advance Purchase - 24 Hours Stay"> Advance Purchase -24 Hours Stay</option>
            <option value="01 - 03 Hours Stay">01 - 03 Hours Stay</option>
            <option value="04 - 06 Hours Stay">04 - 06 Hours Stay</option>
            <option value="07 - 12 Hours Stay">07 - 12 Hours Stay</option>
            <option value="13 - 18 Hours Stay">13 - 18 Hours Stay</option>
            <option value="19 to 24 Hours Stay">19 to 24 Hours Stay</option>
          </select>
        </label>

        <div className="room-section">
          <Carousel indicators={false} interval={null}>
            {rooms.map((display, key) => (
              <Carousel.Item key={key}>
                <Card>
                  <img src={display.img} alt="" height={"150px"} style={{backgroundSize:"cover"}} />
                  <Card.Body>
                    <h6 className='rooom-name'>{display.name}</h6>
                    <div className='cardbody-div'>
                      <p className="price1" style={{ fontWeight: "600" }}>{hours}</p>
                      <p className="price2" style={{ fontWeight: "600" }}>{display.prices[hours]}</p> 
                    </div>

                    <div className="details-container">
                      <a href="#!" onClick={() => handleShow(display)} className="cardbody-a">
                        <TiExportOutline size={25} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <button className="check-availability-button" onClick={handleClick} style={{ backgroundColor: styles.color, color: styles.backgroundColor, fontWeight: "600" }}>BOOK NOW</button>
      </form>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal" size='lg'>
        {selectedRoom && (
          <>
            <Modal.Header  className="custom-modal-header" >
           
              <Modal.Title style={{color:"white "}}>{selectedRoom.name}</Modal.Title>
              <button type="button" className="btn-close custom-btn-close" onClick={handleClose}></button>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
              {selectedRoom.type === 'slideshow' && (
                <Carousel interval={1000} controls={false} >
                  {selectedRoom.images.map((image, index) => (
                    <Carousel.Item key={index} className='image-carousal' >
                      <img src={image} alt={`Slide ${index + 1}`}  height={"500px"} style={{objectFit:"cover"}}/>
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </Modal.Body>
           
          </>
        )}
      </Modal>
    </div>
  );
}

export default Rooms;
