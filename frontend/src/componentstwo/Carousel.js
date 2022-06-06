import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="money.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Save Money</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="time.jpeg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>More Free Time</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="wellness.jpeg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Can Help with Weight Management</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
  
export default ControlledCarousel;