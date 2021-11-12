import React, { useState } from "react";
import { Form, FormControl, Row } from "react-bootstrap";

const ShippingDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  console.log(paymentMethod);

  return (
    <div
      className="container"
      style={{ marginTop: "130px", marginBottom: "100px" }}
    >
      <div className="">
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
            <span className="text-info">Shipping </span>
            Information
          </h3>
        </div>
        <Row xs={1} md={2} lg={2} style={{ marginTop: "80px" }}>
          <div className="col col-12 col-md-12 col-lg-12 text-center mb-5">
            <div className="shadow-lg p-5" style={{ borderRadius: "20px" }}>
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
                    <div className="row row-cols-4 d-flex  justify-content-around">
                      <div className="d-flex align-items-center  me-5">
                        <Form.Check
                          onChange={(e) => setPaymentMethod(e.target.id)}
                          type="radio"
                          name="formHorizontalRadios"
                          id="Bkash"
                        />
                        <div className="">
                          <img
                            width="130px"
                            src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="d-flex  align-items-center me-3">
                        <Form.Check
                          name="formHorizontalRadios"
                          type="radio"
                          onChange={(e) => setPaymentMethod(e.target.id)}
                          id="MasterCard"
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
                          onChange={(e) => setPaymentMethod(e.target.id)}
                          name="formHorizontalRadios"
                          type="radio"
                          id="CashOnDelivery"
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
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ShippingDetails;