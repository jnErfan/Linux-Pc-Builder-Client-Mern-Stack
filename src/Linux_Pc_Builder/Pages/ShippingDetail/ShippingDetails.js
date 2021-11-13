import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Form, FormControl, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ShippingDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("CashOnDelivery");
  const history = useHistory();
  const [orderDetails, setOrderDetails] = useState({});
  const { user } = useAuth();
  const { shippingId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/desktopDetails/${shippingId}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data?.[0]));
  }, [shippingId]);

  const onSubmit = (data) => {
    const status = "Pending";
    const date = new Date();
    data.status = status;
    data.paymentMethod = paymentMethod;
    data.orderDetails = orderDetails;
    data.date = date.toDateString();
    axios.post("http://localhost:5000/orderDetails", data).then((result) => {
      setLoading(true);
      if (result.data.insertedId) {
        setTimeout(() => {
          setLoading(false);
          reset();
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
            history.push("/orderConfirm");
          }, 2000);
        }, 500);
      }
    });
    console.log(data);
  };

  return (
    <div
      className="container"
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
          {/* animate__animated animate__slow animate__fadeOut animate__delay-2s */}
          <div className="d-flex justify-content-center mb-5">
            <Alert
              variant="success w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-1s"
              style={{ position: "fixed" }}
            >
              Your Order Has Been Successful! <br /> Please Wait For Approved.
            </Alert>
          </div>
        </div>
      )}
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
