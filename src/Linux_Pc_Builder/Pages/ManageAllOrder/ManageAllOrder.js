import React from "react";
import { Table } from "react-bootstrap";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h1 className="text-center mt-5" style={{ color: "#2e2e66" }}>
        Manage All Order
      </h1>
      <div className="mt-4">
        <h4 className="mt-5 mb-3 ms-5">
          Total Order:{" "}
          <span className="fw-bold bg-danger text-white rounded-pill p-1">
            2
          </span>{" "}
        </h4>
        <Table responsive="md" hover className="tableContainer">
          <thead>
            <tr className="text-white" style={{ backgroundColor: "#2E2E66" }}>
              <th className="px-5 py-3 border-0 fw-normal">
                <small className="textOrder">Order Info</small>
              </th>
              <th className="px-5 py-3 border-0 fw-normal">Delivery Info</th>
              <th className="px-5 py-3 border-0 fw-normal statusRes">Status</th>
              <th className="px-5 py-3 border-0 fw-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 ps-5 border-0">
                <div className="">
                  <div className="d-flex">
                    <div>
                      <img
                        width="95%"
                        className="me-3 image"
                        src="https://i.ibb.co/XxnXS2X/2.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <span
                        className="text-secondary d-block mb-2"
                        style={{ fontSize: "12px" }}
                      >
                        Order Id:{"  "}
                        <span className="fw-bold text-dark ms-2">
                          kddhstin4D4djkk
                        </span>
                      </span>

                      <p
                        className="text-secondary mb-2"
                        style={{ fontSize: "12px" }}
                      >
                        Placed On:{"  "}
                        <span className="fw-bold text-dark ms-2">
                          27-08-2021
                        </span>
                      </p>

                      <p className="mb-3">
                        <small style={{ fontSize: "12px" }} className="fw-bold">
                          Gaming 10th Gen Core i5-101 genaration DesktopOp
                        </small>
                      </p>
                      <span className="fw-bold pt-0">53,400 ৳</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 ps-5 border-0">
                <p className="mb-1">
                  <small>J.N.Erfan</small>
                </p>
                <p className="mb-1">
                  <small>j.n.erfan420@gmail.com</small>
                </p>
                <p className="mb-1">
                  <small>01978352135</small>
                </p>
                <p className="text-secondary mb-1" style={{ fontSize: "15px" }}>
                  <small>Purbodhala,netrokona,bangladesh Bangladesh</small>
                </p>
                <p className="mb-1 text-secondary">
                  <small>Payment: Cash On Delivery</small>
                </p>
              </td>
              <td className="py-4 ps-5 border-0 statusRes">
                <p>
                  <span className="status1 status px-3 py-1">Pending</span>
                </p>
                <p>
                  <span className="status2 status  px-4 py-1">Reject</span>
                </p>
                <p>
                  <span className="d-flex status3 status ps-2 py-1">
                    Shipped <i className="fas fa-shipping-fast"></i>
                  </span>
                </p>
              </td>
              <td className="py-4 ps-5 border-0">
                <button className="btn btn-outline-success rounded-pill">
                  Shipped <i className="fas fa-shipping-fast"></i>
                </button>
                <button className="btn btn-outline-danger rounded-pill mt-4 px-3">
                  Reject <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
