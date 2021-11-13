import axios from "axios";
import React, { useState } from "react";
import { Alert, Card, Col, FormControl, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import useAuth from "../../Hooks/useAuth";
import "./Review.css";

const Review = () => {
  const { user } = useAuth();
  const [rate, setRate] = useState(0);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const onSubmit = (data) => {
    data.image = user.photoURL;
    data.name = user.displayName;
    data.rate = rate;
    axios.post("http://localhost:5000/review", data).then((result) => {
      setLoading(true);
      if (result.data.insertedId) {
        setTimeout(() => {
          setLoading(false);
          setAlert(true);
          setTimeout(() => {
            reset();
            setAlert(false);
          }, 3000);
        }, 500);
      }
    });
  };
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px" }}
      className="container"
    >
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 9999,
          }}
        >
          <div style={{ marginLeft: "190px" }}>
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        </div>
      )}

      {alert && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.373)",
            zIndex: 9999,
          }}
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{ marginLeft: "190px" }}
          >
            <Alert
              variant="success w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-2s"
              style={{ position: "fixed" }}
            >
              Your Review Has Been Successful ! <br />
              <br /> Your Review Is Very Valuable To Us. This Review Add In Home
              Page
            </Alert>
          </div>
        </div>
      )}
      <h1 className="text-center" style={{ color: "#2e2e66" }}>
        Review
        <i className="far fa-grin ms-3" style={{ color: "#FFA500" }}></i>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              className="border-0  shadow-lg p-3 reviewContainer"
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
                  src={user.photoURL}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{user.displayName}</Card.Title>
                <p>
                  <small className="text-secondary">
                    Review Are Public And Includes Your Account
                  </small>
                </p>
                <hr />
                <div className="text-center mt-3">
                  <p className="text-secondary">Rate Your Experience</p>
                  <Rating
                    onChange={(rate) => setRate(rate)}
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
                  {...register("describe")}
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
