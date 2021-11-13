import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router";
import "./DesktopDetails.css";

const DesktopDetails = () => {
  const history = useHistory();
  const { desktopId } = useParams();
  const [desktopDetails, setDesktopDetails] = useState([]);
  const [loading, setLoading] = useState(false);
//  Get Specific Desktop Details With Params
  useEffect(() => {
    fetch(`https://linux-pc-builder-backend.herokuapp.com/desktopDetails/${desktopId}`)
      .then((res) => res.json())
      .then((data) => setDesktopDetails(data?.[0]));
  }, [desktopId]);
  const {
    _id,
    image,
    pcName,
    configuration,
    price,
    Brand,
    rate,
    rated,
    sell,
    stock,
  } = desktopDetails;

  const shippingHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push(`/shippingDetails/${_id}`);
    }, 500);
  };

  return (
    <div
      className="container textContainer"
      style={{ marginTop: "130px", marginBottom: "100px" }}
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
          <div>
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        </div>
      )}
      <div className="text-center my-5">
        <h3
          style={{
            fontFamily: "'Rubik', sans-serif",
            borderBottom: "5px solid #000",
            borderTop: "5px solid #000",
            display: "inline",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
          className="fw-bold py-4"
        >
          <span className="text-info"> Order </span>
          Information
        </h3>
      </div>
      <Row xs={1} md={2} lg={2} style={{ marginTop: "80px" }}>
        <div className="col col-12 col-md-6 col-lg-6 text-center mb-5">
          <Col>
            <Card
              className="shadow-lg border-0 p-3"
              style={{ borderRadius: "20px" }}
            >
              <Card.Body className="text-start">
                <Card.Title className="fw-bold mb-3">{pcName}</Card.Title>
                <Card.Text className="">
                  <small>{configuration}</small>
                </Card.Text>

                <ul className="text-start my-4">
                  <li>
                    Brand: <span className="brand"> {Brand}</span>
                  </li>
                  <li className="mt-2">
                    Total Sell <span className="fw-bold">{sell}</span>{" "}
                  </li>
                  <li className="mt-2">
                    Stock <span className="fw-bold">{stock}</span>{" "}
                  </li>
                  <li className="mt-2">
                    Rated Person <span className="rated">{rated}</span>
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
                    initialRating={rate}
                    readonly
                  />{" "}
                </div>
                <h4 className="my-4 text-center mt-5">
                  Total Price: {price} <span className="fw-bold">৳</span>{" "}
                </h4>
                {stock === "Available" ? (
                  <button
                    onClick={shippingHandler}
                    className="btn btn-info text-white w-100"
                  >
                    Proceed To Shipping
                  </button>
                ) : (
                  <Button variant="secondary text-white w-100" disabled>
                    Out Of Stock
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="col col-12 col-md-6 col-lg-6 text-center mb-5">
          <div
            className="d-flex justify-content-center shadow-lg"
            style={{
              borderRadius: "20px",
              paddingBottom: "50px",
              paddingTop: "45px",
            }}
          >
            {" "}
            <Card.Img className="w-75" variant="top" src={image} />
          </div>
        </div>
      </Row>
      <div className="mt-5">
        <button
          onClick={() => history.push("/allPcCollection")}
          className="btn btn-secondary w-100 py-2"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DesktopDetails;
