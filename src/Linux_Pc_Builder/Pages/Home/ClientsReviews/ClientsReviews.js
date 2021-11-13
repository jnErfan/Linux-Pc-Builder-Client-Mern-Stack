import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "./ClientsReviews.css";
import Rating from "react-rating";

const ClientsReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
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
          <Carousel variant="dark" interval={1500}>
            {reviews.map(({ _id, image, name, rate, describe }) => (
              <Carousel.Item key={_id}>
                <Col
                  style={{
                    backgroundColor: "#E6E8EB",
                    borderRadius: "10px",
                    padding: "90px",
                    paddingTop: "120px",
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
                        src={image}
                      />
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className="fw-bold">{name}</Card.Title>
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
                          initialRating={rate}
                          readonly
                        />
                      </div>
                      <Card.Text className="ellipsisReview">
                        <small>{describe}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </div>
    </div>
  );
};

export default ClientsReviews;
