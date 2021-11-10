import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./OurPcPackage.css";

const OurPcPackage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="mt-5 container mb-5">
      <div className="text-center mb-5">
        <h1 className="borderUnderline">Our Pc Collection</h1>
      </div>
      <div>
        <Row sm={1} md={2} lg={3} className="">
          {products.map((product) => (
            <div
              className="col col-12 col-md-6 col-lg-4 text-center mb-5"
              key={product.pcName}
            >
              <Col>
                <Card className="shadow-lg cardBody">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Card.Img
                      className="w-75"
                      variant="top"
                      src={product.image}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="ellipsis fw-bold mb-3">
                      {product.pcName}
                    </Card.Title>
                    <Card.Text className="ellipsis">
                      <small>{product.configuration}</small>
                    </Card.Text>

                    <ul className="text-start">
                      <li>
                        Brand: <span className="brand"> {product.Brand}</span>
                      </li>
                      <li className="mt-2">
                        Total Sell{" "}
                        <span className="fw-bold">{product.sell}</span>{" "}
                      </li>
                    </ul>
                    <div className="text-center my-3">
                      <Rating
                        emptySymbol={
                          <i
                            className="far fa-star fs-5"
                            style={{ color: "#FFA500" }}
                          ></i>
                        }
                        fullSymbol={
                          <i
                            class="fas fa-star fs-5"
                            style={{ color: "#FFA500" }}
                          ></i>
                        }
                        initialRating={product.rate}
                        readonly
                      />{" "}
                      <span className="rated">{product.rated}</span>
                    </div>
                    <h4 className="my-4">
                      {product.price} <span className="fw-bold">৳</span>{" "}
                    </h4>
                    <div className="d-flex justify-content-between mt-3">
                      {product.stock === "available" ? (
                        <>
                          <Button variant="outline-success">
                            <i className="fas fa-shopping-cart"></i>
                          </Button>
                          <Button className="buttonColor" variant="text-white">
                            Buy Now
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline-danger" disabled>
                            <i
                              className="far fa-heart fs-5"
                              style={{ color: "red" }}
                            ></i>
                          </Button>
                          <Button variant="secondary text-white" disabled>
                            Out Of Stock
                          </Button>
                        </>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurPcPackage;
