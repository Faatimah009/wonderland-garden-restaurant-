import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide3 from "../../assets/slider/slide3.jpeg";
import slide from "../../assets/slider/slide.jpeg";
import slide2 from "../../assets/slider/slide2.jpeg";
function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={slide3} />
        <Carousel.Caption>
          <h3>Authentic Jollof Rice, Made with Love</h3>
          <p>
            Rich flavour, fresh ingredients, and the perfect blend of spices —
            just the way you love it.
          </p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide2} />
        <Carousel.Caption>
          <h3>Juicy Grilled Chicken, Always a Good Idea</h3>
          <p>
            Tender, well-seasoned and grilled to perfection. Simple, delicious,
            satisfying.
          </p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide} />
        <Carousel.Caption>
          <h3> Great Food, Fast Delivery</h3>
          <p>
            Your favourite meals, at your convenience. Fresh, hot and right on
            time.
          </p>
          <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
