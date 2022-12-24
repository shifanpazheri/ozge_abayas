// eslint-disable-next-line
import React from "react";

function ProductCount() {
  return (
    <div className="product-count">
      <input type="number" id="count" name="count" step="1" min="1"></input>
    </div>
  );
}

export default ProductCount;
