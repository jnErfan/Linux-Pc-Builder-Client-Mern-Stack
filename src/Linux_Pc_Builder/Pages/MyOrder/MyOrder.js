import React from "react";

const MyOrder = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1 className="text-center ms-5" style={{ color: "#2e2e66" }}>
        My Order
      </h1>
      <div>
        <div>
          <div className="row row-cols-2 mt-5">
            <div className="col col-12 col-md-12 col-lg-6">
              <div
                className="card mb-3 border-0 shadow-lg mb-4"
                style={{ borderRadius: "20px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      style={{
                        borderRadius: "100px",
                        height: "150px",
                        marginTop: "30px",
                      }}
                      src="https://i.ibb.co/XxnXS2X/2.png"
                      className="img-fluid rounded-start w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="card-text">
                        <h6 className="">
                          <small className="text-danger fw-bold">
                            Reject Reason
                          </small>
                        </h6>
                        <h6
                          style={{ fontSize: "12px" }}
                          className="text-secondary"
                        >
                          Order Id :{" "}
                          <small className="fw-bold text-dark">
                            {" "}
                            fgfgfjhyjddd46
                          </small>
                        </h6>
                        <h6
                          className="text-secondary"
                          style={{ fontSize: "15px" }}
                        >
                          <small>
                            Placed On :{" "}
                            <span className="text-dark">27-08-2021</span>{" "}
                          </small>
                        </h6>
                      </div>
                      <h6 className="text-secondary">
                        Intel Core i5-11400 11th Gen Gaming
                      </h6>
                      <h6>
                        67,800 <span className="fw-bold">৳</span>{" "}
                      </h6>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-danger fw-bold rounded-pill py-0 px-3">
                          Cancel
                        </button>
                        <span
                          className="text-white p-3 rounded-pill py-1"
                          style={{
                            backgroundColor: "rgba(247, 92, 36, 0.842)",
                          }}
                        >
                          Pending
                        </span>
                        {/* <span className="packageStatus2 text-white p-3 rounded-pill py-1 bg-danger">
                          Reject
                        </span> */}

                        {/* <span className="packageStatus2 text-white p-3 rounded-pill py-1 bg-success">
                          Shipped <i className="fas fa-shipping-fast"></i>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
