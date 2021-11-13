import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const [orderPackage, setOrderPackage] = useState([]);
  const [orderCancel, setOrderCancel] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const { user } = useAuth();

  // Get LogIn User All Orders 
  useEffect(() => {
    fetch(`https://linux-pc-builder-backend.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderPackage(data);
        setOrderCancel(data);
      });
  }, [user.email, orderCancel]);

  //  Order Cancel
  const cancelHandler = (id) => {
    const confirmation = prompt("If You Want To Cancel ? Then Write (CANCEL)");
    if (confirmation === "CANCEL") {
      axios.delete(`https://linux-pc-builder-backend.herokuapp.com/deleteOrder/${id}`).then((result) => {
        if (result.data.deletedCount) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 3000);
          }, 500);
        }
      });
    } else {
      return;
    }
  };
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
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
              variant="danger w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-1s"
              style={{ position: "fixed" }}
            >
              Your Order Has Been Canceled!
            </Alert>
          </div>
        </div>
      )}
      <div className="text-center">
        <h1
          className="text-center pb-3"
          style={{
            color: "#2e2e66",
            borderBottom: "5px solid #2e2e66",
            borderRadius: "10px",
            display: "inline-block",
            fontFamily: "'Bebas Neue', cursive",
          }}
        >
          My Order
        </h1>
      </div>
      <div>
        <div>
          {!orderPackage.length ? (
            <h1 className="text-center text-muted mt-5">No Order</h1>
          ) : (
            <div className="row row-cols-2 mt-5">
              {orderPackage.map(
                ({ _id, date, orderDetails, status, reason }) => (
                  <div className="col col-12 col-md-12 col-lg-6" key={_id}>
                    <div
                      className="card mb-3 border-0 shadow-lg mb-4"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            style={{
                              borderRadius: "50px",
                            }}
                            src={orderDetails?.image}
                            className="img-fluid w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="card-text">
                              <h6 className="">
                                <small className="text-danger fw-bold">
                                  {reason}
                                </small>
                              </h6>
                              <h6
                                style={{ fontSize: "12px" }}
                                className="text-secondary"
                              >
                                Order Id :{" "}
                                <small className="fw-bold text-dark">
                                  {" "}
                                  {_id}
                                </small>
                              </h6>
                              <h6
                                className="text-secondary"
                                style={{ fontSize: "15px" }}
                              >
                                <small>
                                  Placed On :
                                  <span className="text-dark ms-2">{date}</span>
                                </small>
                              </h6>
                            </div>
                            <h6 className="text-dark">
                              {orderDetails?.pcName}
                            </h6>
                            <h6>
                              {orderDetails?.price}{" "}
                              <span className="fw-bold">৳</span>{" "}
                            </h6>

                            <div className="row row-cols-2 d-flex justify-content-between">
                              <div className="col col-12  col-md-6 col-lg-6 mt-2">
                                {status === "Shipped" ? (
                                  <button
                                    className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3"
                                    disabled
                                  >
                                    Cancel
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => cancelHandler(_id)}
                                    className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3"
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                              <div className="col col-12 col-md-6 col-lg-6 mt-2">
                                {status === "Pending" && (
                                  <span
                                    className="text-white p-3 rounded-pill py-1"
                                    style={{
                                      backgroundColor:
                                        "rgba(247, 92, 36, 0.842)",
                                    }}
                                  >
                                    Pending
                                  </span>
                                )}
                                {status === "Reject" && (
                                  <span className="packageStatus2 text-white p-3 rounded-pill py-1 bg-danger">
                                    Reject
                                  </span>
                                )}

                                {status === "Shipped" && (
                                  <span className="packageStatus2 text-white p-3 rounded-pill py-1 bg-success">
                                    Shipped{" "}
                                    <i className="fas fa-shipping-fast"></i>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
