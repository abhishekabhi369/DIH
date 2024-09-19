import React, { useState } from 'react';
import './LeftSlide.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function LeftSlide( { tagline }) {

  const features = [
    { points: "Located in the Heart of Dubai Airport.", img: "images/1.jpg" },
    { points: "Hotel rooms available in all three concourses of Terminal 3.", img: "images/2.jpg" },
    { points: "Equipped with modern traveler amenities,free Wi-Fi, coffee/tea machine,and more.", img: "images/3.jpg" },
    { points: "Access to a Health club and Spa facilities.", img: "images/4.jpg" },
    { points: "24/7 room service and restaurants/bars available.", img: "images/7.jpg" },
    { points: "Conveniently located near departure gates and Dubai Duty Free.", img: "images/8.jpg" },
    { points: "Ahlan Meet & Greet team available to make your journey easier.", img: "images/9.jpg" },
    { points: "Flexible hourly rates.", img: "images/10.jpg" },
    
  ];

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [setText,setSelectedText]=useState(null)

  const handleClose = () => setShow(false);
  const handleShow = (img,points) => {
    setSelectedImage(img);
    setSelectedText(points);
    setShow(true);
  };

  return (
    <div className='left-slide-content' >
       {
        <div className='Left-main'> 
        <h5>{tagline}</h5>
        </div>
    }
      <ul>
        {features.map((feature, key) => (
          <li 
            key={key} 
            onClick={() => handleShow(feature.img,feature.points)} 
            className='left-slide-content-list' >
            {feature.points}
            
          </li>
        ))}
      </ul>
         
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal"  size='lg'>
        <Modal.Body className="custom-modal-body">
          <img src={selectedImage} alt="" width={"100%"} height={"500px"} style={{objectFit:"cover"}}/>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
        <h6 className='slide-text'>{setText}</h6>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LeftSlide;
