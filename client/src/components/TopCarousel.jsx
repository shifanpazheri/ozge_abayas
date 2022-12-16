import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem";
import CarouselData from "./CarouselData";

function TopCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className="carousel">
        <CarouselItem
          text={CarouselData[0].text}
          image={CarouselData[0].image}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} className="carousel">
        <CarouselItem
          text={CarouselData[1].text}
          image={CarouselData[1].image}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} className="carousel">
        <CarouselItem
          text={CarouselData[2].text}
          image={CarouselData[2].image}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default TopCarousel;
