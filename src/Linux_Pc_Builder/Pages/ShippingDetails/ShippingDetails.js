import React from "react";
import { Card, Col, Form, FormControl, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router";
import "./ShippingDetails.css";

const ShippingDetails = () => {
  const history = useHistory();
  const { desktopId } = useParams();
  console.log(desktopId);
  return (
    <div
      className="container textContainer"
      style={{ marginTop: "130px", marginBottom: "100px" }}
    >
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
          <span className="text-info">Shipping</span> And{" "}
          <span className="text-info"> Order </span>
          Information
        </h3>
      </div>
      <Row xs={1} md={2} lg={2} style={{ marginTop: "80px" }}>
        <div className="col col-12 col-md-6 col-lg-6 text-center mb-5">
          <h3 className="mb-4">Shipping Information</h3>
          <div className="shadow-lg p-4" style={{ borderRadius: "20px" }}>
            <form>
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="Name"
                required
              />
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="email"
                placeholder="Email"
                required
              />
              <FormControl
                className="py-3 mt-4"
                width="100%"
                type="number"
                placeholder="Phone Number"
                required
              />

              <FormControl
                as="textarea"
                className="py-3 mt-4"
                width="100%"
                type="text"
                placeholder="Shipping Address"
                required
              />

              <fieldset>
                <Form.Group className="mb-3 text-start mt-4">
                  <Form.Label as="legend">
                    <span className="text-secondary">Payment With</span>{" "}
                  </Form.Label>
                  <div className="row row-cols-4">
                    <div className="d-flex align-items-center  me-5">
                      <Form.Check
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <div className="">
                        <img
                          width="130px"
                          src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <Form.Check
                        name="formHorizontalRadios"
                        type="radio"
                        id="formHorizontalRadios2"
                      />
                      <div className="ms-3">
                        <img
                          width="100px"
                          src="https://www.bahamastradeinfo.gov.bs/buy/wp-content/uploads/sites/2/2019/07/mastercard_PNG16.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col col-12 col-md-12 col-lg-4 d-flex align-items-center">
                      <Form.Check
                        name="formHorizontalRadios"
                        type="radio"
                        id="formHorizontalRadios3"
                      />
                      <div className="ms-4">
                        <img
                          width="140px"
                          src="https://icon-library.com/images/cash-on-delivery-icon/cash-on-delivery-icon-14.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Form.Group>
              </fieldset>
              <button
                className="btn btn-info w-100 py-2 text-white mt-4"
                type="submit"
              >
                Proceed To Confirm
              </button>
            </form>
          </div>
        </div>
        <div className="col col-12 col-md-6 col-lg-6 text-center mb-5">
          <h3 className="mb-4">Order Details</h3>
          <Col>
            <Card
              className="shadow-lg border-0 p-3"
              style={{ borderRadius: "20px" }}
            >
              <div className="d-flex justify-content-center">
                {" "}
                <Card.Img
                  className="w-75"
                  variant="top"
                  src="https://i.ibb.co/XxnXS2X/2.png"
                />
              </div>
              <Card.Body className="text-start">
                <Card.Title className="fw-bold mb-3">
                  Gaming 10th Gen Core i5-104 voluptas et, iusto deserunt iure
                  dolores quod perspiciatis
                </Card.Title>
                <Card.Text className="">
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit porro expedita, voluptas et, iusto deserunt iure
                    dolores quod perspiciatis eligendi ipsa, dolorem provident
                    odio deleniti exercitationem. Tempore accusamus nesciunt
                    dolorum!
                  </small>
                </Card.Text>

                <ul className="text-start my-4">
                  <li>
                    Brand: <span className="brand"> Intel</span>
                  </li>
                  <li className="mt-2">
                    Total Sell <span className="fw-bold">147</span>{" "}
                  </li>
                  <li className="mt-2">
                    Stock <span className="fw-bold">Available</span>{" "}
                  </li>
                  <li className="mt-2">
                    Rated Person <span className="rated">78</span>
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
                    initialRating={4.9}
                    readonly
                  />{" "}
                </div>
                <h4 className="my-4 text-center mt-5">
                  Total Price: 67,800 <span className="fw-bold">৳</span>{" "}
                </h4>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
      <button
        onClick={() => history.push("/")}
        className="btn btn-secondary w-100 py-2"
      >
        Back
      </button>
    </div>
  );
};

export default ShippingDetails;
