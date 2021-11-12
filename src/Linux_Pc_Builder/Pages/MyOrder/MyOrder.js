import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const [orderPackage, setOrderPackage] = useState([]);
  const [orderCancel, setOrderCancel] = useState("");
  const { user } = useAuth();

  // Get LogIn User All Orders
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderPackage(data);
        setOrderCancel(data);
      });
  }, [orderCancel]);
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1 className="text-center ms-5" style={{ color: "#2e2e66" }}>
        My Order
      </h1>
      <div>
        <div>
          <div className="row row-cols-2 mt-5">
            {orderPackage.map(({ _id, date, orderDetails, status, reason }) => (
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
                        src={orderDetails.image}
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
                            <small className="fw-bold text-dark"> {_id}</small>
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
                        <h6 className="text-dark">{orderDetails.pcName}</h6>
                        <h6>
                          {orderDetails.price}{" "}
                          <span className="fw-bold">৳</span>{" "}
                        </h6>
                        <div className="d-flex justify-content-between">
                          {status === "Shipped" ? (
                            <button
                              className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3"
                              disabled
                            >
                              Cancel
                            </button>
                          ) : (
                            <button className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3">
                              Cancel
                            </button>
                          )}
                          {status === "Pending" && (
                            <span
                              className="text-white p-3 rounded-pill py-1"
                              style={{
                                backgroundColor: "rgba(247, 92, 36, 0.842)",
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
                              Shipped <i className="fas fa-shipping-fast"></i>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
