import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "./ClientsReviews.css";
import img from "./6.jpg";
import Rating from "react-rating";

const ClientsReviews = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <div>
        <div className="text-center mb-5">
          <h1 className="reviewUnderline">
            Our Happy Customer <span style={{ color: "#ffa600" }}>Reviews</span>
            <img
              className="ms-3"
              src="https://img.icons8.com/windows/40/000000/grinning-face.png"
              alt=""
            />
          </h1>
        </div>

        <Row xs={1} md={1} lg={1} className="g-4" style={{ marginTop: "60px" }}>
          <Carousel fade variant="dark">
            <Carousel.Item>
              <Col
                style={{
                  backgroundColor: "#E6E8EB",
                  borderRadius: "10px",
                  padding: "150px",
                }}
              >
                <Card
                  className="border-0  shadow-lg"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex justify-content-center pt-4">
                    <Card.Img
                      style={{
                        marginTop: "-100px",
                        border: "5px solid #fff",
                        borderRadius: "50%",
                        height: "150px",
                        width: "150px",
                      }}
                      src={img}
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">
                      Jonelle Beveridge
                    </Card.Title>
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
                        initialRating={3.6}
                        readonly
                      />
                    </div>
                    <Card.Text className="ellipsisReview">
                      <small>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    </div>
  );
};

export default ClientsReviews;
