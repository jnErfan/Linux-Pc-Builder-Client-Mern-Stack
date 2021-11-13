import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./OurPcPackage.css";

const OurPcPackage = () => {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const history = useHistory();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/desktopsPagination?page=0&size=6`)
      .then((res) => res.json())
      .then((data) => setProducts(data?.desktopPackage));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/addToCartOrder?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProduct(data);
      });
  }, [user.email]);

  const addToCartHandler = (id) => {
    const matchedIdDesktop = products.filter((cart) => cart._id === id);
    let cartDesktopDetails = matchedIdDesktop?.[0];

    let oldItemMatched = cartProduct.filter(
      (desktop) => desktop._id === cartDesktopDetails._id
    );
    if (!oldItemMatched.length) {
      cartDesktopDetails.email = user.email;
      axios
        .post(`http://localhost:5000/addToCartOrder`, cartDesktopDetails)
        .then((result) => {
          if (result.data.insertedId) {
            alert("Cart Added");
          } else {
            alert("Something Is Wrong");
          }
        });
    } else {
      alert("already Added");
    }
  };

  return (
    <div className="my-5 container">
      <div className="text-center mb-5">
        <h1 className="borderUnderline">Our Pc Collections</h1>
      </div>
      <div>
        {!products.length ? (
          <div
            className="text-center"
            style={{ marginTop: "70px", marginBottom: "150px" }}
          >
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        ) : (
          <Row sm={1} md={2} lg={3} className="mt-5">
            {products.map((product) => (
              <div
                className="col col-12 col-md-6 col-lg-4 text-center mb-5"
                key={product._id}
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
                              className="fas fa-star fs-5"
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
                        {product.stock === "Available" ? (
                          <Button
                            onClick={() => addToCartHandler(product._id)}
                            variant="outline-secondary"
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </Button>
                        ) : (
                          <Button variant="secondary text-white" disabled>
                            Stock Out
                          </Button>
                        )}

                        <Button
                          onClick={() =>
                            history.push(`/desktopDetails/${product._id}`)
                          }
                          className="buttonColor"
                          variant="text-white"
                        >
                          Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        )}
        <div className="text-center">
          <button
            onClick={() => history.push("allPcCollection")}
            style={{ color: "#673d6bf8" }}
            className="btn fs-5 mt-0 fw-bold"
          >
            See All <br /> <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPcPackage;
