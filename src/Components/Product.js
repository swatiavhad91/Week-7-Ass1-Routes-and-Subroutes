import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  } else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          margin: "auto",
          background: "skyblue",
          padding:"10px"
        }}
      >
        {productData}
      </div>
    </div>
  );
};

export default Product;