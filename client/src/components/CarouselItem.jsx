import React from "react";
function CarouselItem(props) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 carousel-item-text">
        <h1>{props.text}</h1>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 carousel-item-design">
        <img className="carousel-image" src={props.image} />
      </div>
    </div>
  );
}

export default CarouselItem;
