import React from "react";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px" }}
      className="container"
    >
      <h1 className="text-center" style={{ color: "#2e2e66" }}>
        Review
        <i className="far fa-grin ms-3" style={{ color: "#FFA500" }}></i>
      </h1>
      <form>
        <Row sm={1} md={1} lg={1} style={{ marginTop: "80px" }}>
          <Col
            style={{
              backgroundColor: "#E6E8EB",
              borderRadius: "20px",
              paddingTop: "130px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingBottom: "40px",
            }}
          >
            <Card
              className="border-0  shadow-lg p-3"
              style={{ borderRadius: "20px" }}
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
                  src="https://yt3.ggpht.com/ytc/AKedOLTG3VPjtqAbVGOvEXAgb-9aPeLgDtZScX2hEMao6A=s900-c-k-c0x00ffffff-no-rj"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Alia Bhat</Card.Title>
                <p>
                  <small className="text-secondary">
                    Review Are Public And Includes Your Account
                  </small>
                </p>
                <hr />
                <div className="text-center mt-3">
                  <p className="text-secondary">Rate Your Experience</p>
                  <Rating
                    onChange={(rate) => alert(rate)}
                    emptySymbol={
                      <i
                        className="far fa-star fs-1"
                        style={{ color: "#FFA500" }}
                      ></i>
                    }
                    fullSymbol={
                      <i
                        className="fas fa-star fs-1"
                        style={{ color: "#FFA500" }}
                      ></i>
                    }
                    fractions={2}
                  />
                </div>
                <FormControl
                  as="textarea"
                  className="py-3 my-4"
                  width="100%"
                  type="name"
                  placeholder="Describe Your Experience"
                  required
                />

                <button
                  type="submit"
                  className="btn w-100 py-3 mt-4 text-white"
                  style={{ backgroundColor: "#FFA500" }}
                >
                  Submit Review
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Review;
