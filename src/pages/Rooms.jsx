import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './Room.css';
import Card from 'react-bootstrap/Card';
import { TiExportOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';

function Rooms({ styles }) {
  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hours, setHours] = useState("01 - 03 Hours Stay");
  const [price, setPrice] = useState("");  // Store the price directly

  const handleClose = () => setShow(false);

  const handleShow = (room) => {
    setSelectedRoom(room);
    setPrice(room.prices[hours]);  // Set the price when room is selected
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
      // Update price based on the selected room and the selected hours
      setPrice(selectedRoom.prices[selectedHours]);
    }
  };

  const rooms = [
    {
      name: "DELUXE DOUBLE ROOM",
      img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_cb_enhanced.jpg",
      images: [
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/3_enhanced.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/1_enhanced.jpg"
      ],
      prices: {
        "Advance Purchase - 24 Hours Stay": "977.50 AED",
        "01 - 03 Hours Stay": "403 AED",
        "04 - 06 Hours Stay": "690 AED",
        "07 - 12 Hours Stay": "805 AED",
        "13 - 18 Hours Stay": "977.50 AED",
        "19 to 24 Hours Stay": "1150 AED"
      },
      type: "slideshow"
    },
    {
      name: "DELUXE TWIN ROOM",
      img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/deluxe_twin_cb_enhanced.jpg",
      images: [
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/23_enhanced.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg",
        "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/1_enhanced.jpg"
      ],
      prices: {
        "Advance Purchase - 24 Hours Stay": "977.50 AED",
        "01 - 03 Hours Stay": "403 AED",
        "04 - 06 Hours Stay": "690 AED",
        "07 - 12 Hours Stay": "805 AED",
        "13 - 18 Hours Stay": "977.50 AED",
        "19 to 24 Hours Stay": "1150 AED"
      },
      type: "slideshow"
    },
    { name: "SUPERIOR DELUXE ROOM", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/superior_ca_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/19_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/21_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/20_enhanced.jpg"],
      prices: {
        "Advance Purchase - 24 Hours Stay": "1062.50 AED",
        "01 - 03 Hours Stay": "438 AED",
        "04 - 06 Hours Stay": "750 AED",
        "07 - 12 Hours Stay": "875 AED",
        "13 - 18 Hours Stay": "1062.50 AED",
        "19 to 24 Hours Stay": "1250 AED"
      }, type: "slideshow" },
    { name: "EXECUTIVE ROOM ", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/executive_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/9_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/8_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/7_enhanced.jpg"],  prices: {
      "Advance Purchase - 24 Hours Stay": "1190.50 AED",
      "01 - 03 Hours Stay": "490 AED",
      "04 - 06 Hours Stay": "840 AED",
      "07 - 12 Hours Stay": "980 AED",
      "13 - 18 Hours Stay": "1190 AED",
      "19 to 24 Hours Stay": "1400 AED"
    }, type: "slideshow" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/junior_suite_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/25_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/26_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/27_enhanced.jpg"],  prices: {
      
      "01 - 03 Hours Stay": "630 AED",
      "04 - 06 Hours Stay": "1080 AED",
      "07 - 12 Hours Stay": "1260 AED",
      "13 - 18 Hours Stay": "1530 AED",
      "19 to 24 Hours Stay": "1800 AED"
    }, type: "slideshow" },
    { name: "JUNIOR SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/junior_suite_ca_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/12_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/10_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/11_enhanced.jpg"], prices: {
      "01 - 03 Hours Stay": "630 AED",
      "04 - 06 Hours Stay": "1080 AED",
      "07 - 12 Hours Stay": "1260 AED",
      "13 - 18 Hours Stay": "1530 AED",
      "19 to 24 Hours Stay": "1800 AED"
    }, type: "slideshow" },
    { name: "FAMILY ROOM", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/family_room_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/res_roomimg_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/23_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/24_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/2a_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/1_enhanced.jpg "], 
       prices: { 
      "01 - 03 Hours Stay": "603.75 AED",
      "04 - 06 Hours Stay": "1104 AED",
      "07 - 12 Hours Stay": "1288 AED",
      "13 - 18 Hours Stay": "1661.50 AED",
      "19 to 24 Hours Stay": "1955 AED"
    }, type: "slideshow" },
    { name: "ROYAL SUITE", img: "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/main-image/royal_suite_cb_enhanced.jpg", images: ["https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/13_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/15_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/18_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/17_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/16_enhanced.jpg", "https://reservations.dubaiintlhotels.com/assets/hotel/73455/media/room/detail-image/14_enhanced.jpg"], prices: {
      
      "07 - 12 Hours Stay": "4200 AED",
      "13 - 18 Hours Stay": "5100 AED",
      "19 to 24 Hours Stay": "6000 AED"
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
                      <p className="price2" style={{ fontWeight: "600" }}>{display.prices[hours]}</p> {/* Display price */}
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

      <Modal show={show} onHide={handleClose}>
        {selectedRoom && (
          <>
            <Modal.Header>
              <Modal.Title>{selectedRoom.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedRoom.type === 'slideshow' && (
                <Carousel>
                  {selectedRoom.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img src={image} alt={`Slide ${index + 1}`} width={"800px"} height={"400px"} style={{backgroundSize:"contain"}} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
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
