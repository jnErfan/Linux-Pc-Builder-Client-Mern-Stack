import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import "./OurAllPcCollection.css";

const OurAllPcCollection = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [pageCounts, setPageCount] = useState(0);
  const size = 6;

  useEffect(() => {
    fetch(`http://localhost:5000/desktopsPagination?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.desktopPackage);
        const count = data?.count;
        setPageCount(Math.ceil(count / size));
      });
  }, [page]);

  return (
    <div
      className="container"
      style={{ marginTop: "130px", marginBottom: "100px" }}
    >
      <div className="text-center mb-5">
        <h1 className="borderUnderline2">Our All Pc Collections</h1>
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
                  <Card className="shadow-lg cardBody2">
                    <div className="d-flex justify-content-center">
                      {" "}
                      <Card.Img
                        className="w-75"
                        variant="top"
                        src={product.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="ellipsis2 fw-bold mb-3">
                        {product.pcName}
                      </Card.Title>
                      <Card.Text className="ellipsis2">
                        <small>{product.configuration}</small>
                      </Card.Text>

                      <ul className="text-start">
                        <li>
                          Brand:{" "}
                          <span className="brand2"> {product.Brand}</span>
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
                        <span className="rated2">{product.rated}</span>
                      </div>
                      <h4 className="my-4">
                        {product.price} <span className="fw-bold">৳</span>{" "}
                      </h4>
                      <div className="d-flex justify-content-between mt-3">
                        {product.stock === "Available" ? (
                          <Button variant="outline-secondary">
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
        <div
          className="mt-5 text-center shadow-lg py-3"
          style={{ borderRadius: "15px" }}
        >
          {[...Array(pageCounts).keys()].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={
                pageNum === page
                  ? "btn btn-info mx-2 fw-bold rounded-circle"
                  : "btn btn-outline-info fw-bold mx-2 rounded-circle"
              }
            >
              {pageNum + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAllPcCollection;
