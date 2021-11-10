import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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
            Our Happy Customer
            <img
              className="ms-3"
              src="https://img.icons8.com/windows/40/000000/grinning-face.png"
              alt=""
            />
          </h1>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4" style={{ marginTop: "60px" }}>
          <Col
            className="px-5 pb-5"
            style={{
              backgroundColor: "#E6E8EB",
              borderRadius: "10px",
              paddingTop: "110px",
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
                <Card.Title className="fw-bold">Jonelle Beveridge</Card.Title>
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
        </Row>
      </div>
    </div>
  );
};

export default ClientsReviews;
