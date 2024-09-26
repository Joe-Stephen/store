import React from "react";
import { Col, Row } from "react-bootstrap";
import { productsArray } from "../productsStore";

const StorePage = () => {
  return (
    <>
      <h1 align="center" className="p-4">
        Welcome to the STORE!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product) => (
          <Col key={product.id} align="center">
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StorePage;
