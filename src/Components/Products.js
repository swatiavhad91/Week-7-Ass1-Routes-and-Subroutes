import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "U.S. POLO ASSN, Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "Lee Cooper Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];

  const { url } = useRouteMatch();

  
  const List = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "20%",
            background: "pink",
            
            
          }}
        >
          <h3>Products</h3>
          <ul style={{ fontSize: "15px" }}>
            {List}
          </ul>
        </div>
      </div>

      <Route path={`${url}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Products;