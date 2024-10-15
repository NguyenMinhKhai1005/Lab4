import React from "react";
import { Carousel } from "react-bootstrap";

const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="pizza1.jpg" alt="First slide" className="d-block w-130" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pizza2.jpg" alt="First slide" className="d-block w-130" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pizza3.jpg" alt="First slide" className="d-block w-130" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pizza4.jpg" alt="First slide" className="d-block w-130" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pizza5.jpg" alt="First slide" className="d-block w-130" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;
