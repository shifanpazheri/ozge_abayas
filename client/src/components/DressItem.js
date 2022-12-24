import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let costPrice = 900;
let sellingPrice = 600;
let image = "/carouselImage/c1.png";
let name = "demo";

function DressItem(props) {
  costPrice = Math.max(props.costPrice, props.sellingPrice);
  sellingPrice = Math.min(props.costPrice, props.sellingPrice);
  image = props.image;
  name = props.name;
  return (
    <Card style={{ width: "19rem" }} className="card-list">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>
            ₹{sellingPrice}
            <span
              style={{
                padding: "0rem 1.5rem 0rem 1.5rem",
                textDecoration: "line-through",
                color: "#808080",
              }}
            >
              ₹{costPrice}{" "}
            </span>
            {"       "}
            <span style={{ color: "#26a541", fontSize: "1rem" }}>
              {Math.round(((costPrice - sellingPrice) * 100) / costPrice)}% off
            </span>
          </p>
        </Card.Text>
        <Button variant="outline-secondary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default DressItem;
