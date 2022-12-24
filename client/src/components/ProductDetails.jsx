// eslint-disable-next-line
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProductSize from "./ProductSize";
import ProductCount from "./ProductCount";

let image = "/dataImage/p1.png";
let costPrice = 900;
let sellingPrice = 600;
let name = "dis parturient montes";

function Product() {
  return (
    <div className="product-detail">
      <Container>
        <Row>
          <Col md={4}>
            <img style={{ width: "100%" }} src={image} alt="Dress Pic" />
          </Col>
          <Col md={8}>
            {" "}
            <h2 style={{ marginBottom: "3%" }}>{name}</h2>
            <p style={{ fontSize: "1.5rem" }}>
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
              <span style={{ color: "#26a541" }}>
                {Math.round(((costPrice - sellingPrice) * 100) / costPrice)}%
                off
              </span>
            </p>
            <ProductSize />
            <ProductCount />
            <Button variant="outline-secondary">Buy Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
