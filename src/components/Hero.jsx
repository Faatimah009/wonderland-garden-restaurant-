import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide001 from "../public/image/slider/slide001.png;"
import slidenext from "../public/image/slider/slidenext.jpg";
import slidenew from "../public/image/slider/slidenew.jpg";
function Hero() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src={slide001} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slidenext} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slidenew} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
