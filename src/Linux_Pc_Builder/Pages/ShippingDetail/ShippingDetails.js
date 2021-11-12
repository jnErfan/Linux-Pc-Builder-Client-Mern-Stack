import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ShippingDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("CashOnDelivery");
  const history = useHistory();
  const { user } = useAuth();
  const { shippingId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.paymentMethod = paymentMethod;
    data.orderId = shippingId;
    axios.post("http://localhost:5000/orderDetails", data).then((result) => {
      if (result.data.insertedId) {
        reset();
        alert("Order Successful");
        history.push("/orderConfirm");
      }
    });
    console.log(data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="name"
                  placeholder="Name"
                  required
                  defaultValue={user.displayName}
                  {...register("name")}
                />
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="email"
                  placeholder="Email"
                  required
                  value={user.email}
                  {...register("email")}
                />
                <FormControl
                  className="py-3 mt-4"
                  width="100%"
                  type="number"
                  placeholder="Phone Number"
                  required
                  {...register("number")}
                />

                <FormControl
                  as="textarea"
                  className="py-3 mt-4"
                  width="100%"
                  type="text"
                  placeholder="Shipping Address"
                  required
                  {...register("address")}
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
        <div className="mt-5">
          <button
            onClick={() => history.push(`/desktopDetails/${shippingId}`)}
            className="btn btn-secondary w-100 py-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
