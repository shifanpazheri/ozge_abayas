// eslint-disable-next-line
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function ProductSize() {
  return (
    <div className="product-size">
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          Choose Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">S</Dropdown.Item>
          <Dropdown.Item href="#/action-1">M</Dropdown.Item>
          <Dropdown.Item href="#/action-2">L</Dropdown.Item>
          <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ProductSize;
