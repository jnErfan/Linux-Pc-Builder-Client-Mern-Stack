import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [modified, setModified] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/manageOrders")
      .then((res) => res.json())
      .then((data) => {
        setModified(data);
        setOrders(data);
      });
  }, [modified]);

  const shippedHandler = (id) => {
    const status = { status: "Shipped" };
    axios.put(`http://localhost:5000/statusUpdate/${id}`, status);
  };
  const rejectHandler = (id) => {
    const reason = prompt("Why You Want To Reject This Order");
    if (reason === null) {
      return;
    } else {
      const status = { status: "Reject", reason: reason };
      axios.put(`http://localhost:5000/statusUpdate/${id}`, status);
    }
  };
  const pending = orders.filter((order) => order.status === "Pending");
  const reject = orders.filter((order) => order.status === "Reject");
  const shipped = orders.filter((order) => order.status === "Shipped");

  return (
    <div style={{ marginBottom: "100px" }}>
      <h1 className="text-center mt-5" style={{ color: "#2e2e66" }}>
        Manage All Order
      </h1>
      <div className="mt-4">
        <div className="d-flex justify-content-around shadow-lg my-4 rounded-3">
          <h5 className="my-3 ms-5 fw-bold">
            Total Order:
            <span
              className="fw-bold text-white rounded-circle px-2 ms-2"
              style={{ backgroundColor: "#2e2e66" }}
            >
              {orders.length}
            </span>
          </h5>
          <p className="my-3 ms-5 fw-bold">
            Total Pending:
            <span
              className="fw-bold text-white rounded-circle px-2 ms-2"
              style={{ backgroundColor: "rgba(185, 161, 26, 0.692)" }}
            >
              {pending.length}
            </span>
          </p>
          <p className="my-3 ms-5 fw-bold">
            Total Shipped:
            <span
              className="fw-bold text-white rounded-circle px-2 ms-2"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.863)" }}
            >
              {shipped.length}
            </span>
          </p>

          <p className="my-3 ms-5 fw-bold">
            Total Rejected:
            <span className="fw-bold bg-danger text-white rounded-circle px-2 ms-2">
              {reject.length}
            </span>
          </p>
        </div>
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
            {orders.map(
              ({
                name,
                email,
                address,
                number,
                paymentMethod,
                _id,
                date,
                orderDetails,
                status,
              }) => (
                <tr>
                  <td className="py-4 ps-5 border-0">
                    <div className="">
                      <div className="d-flex">
                        <div>
                          <img
                            width="95%"
                            className="me-3 image"
                            src={orderDetails.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <span
                            className="text-secondary d-block mb-2"
                            style={{ fontSize: "7px" }}
                          >
                            Order Id:{"  "}
                            <span className="fw-bold text-dark ms-2">
                              {_id}
                            </span>
                          </span>

                          <p
                            className="text-secondary mb-2"
                            style={{ fontSize: "12px" }}
                          >
                            Placed On: <br />
                            <span className="fw-bold text-dark">{date}</span>
                          </p>

                          <p className="mb-3">
                            <small
                              style={{ fontSize: "12px" }}
                              className="fw-bold"
                            >
                              {orderDetails?.pcName}
                            </small>
                          </p>
                          <span className="fw-bold pt-0">
                            {orderDetails?.price} ৳
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 ps-5 border-0">
                    <p className="mb-1">
                      <small>{name}</small>
                    </p>
                    <p className="mb-1">
                      <small>{email}</small>
                    </p>
                    <p className="mb-1">
                      <small>{number}</small>
                    </p>
                    <p
                      className="text-secondary mb-1"
                      style={{ fontSize: "15px" }}
                    >
                      <small>{address}</small>
                    </p>
                    <p className="mb-1 text-secondary">
                      <small>Payment: {paymentMethod}</small>
                    </p>
                  </td>
                  <td className="py-4 ps-5 border-0 statusRes ">
                    <div style={{ marginTop: "65%" }}>
                      {status === "Pending" && (
                        <p>
                          <span className="status1 status px-3 py-2">
                            Pending
                          </span>
                        </p>
                      )}

                      {status === "Reject" && (
                        <p>
                          <span className="status2 status  px-4 py-1">
                            Reject
                          </span>
                        </p>
                      )}
                      {status === "Shipped" && (
                        <p>
                          <span className="d-flex status3 status px-3 py-1">
                            Shipped <i className="fas fa-shipping-fast"></i>
                          </span>
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="py-4 ps-5 border-0">
                    <div style={{ marginTop: "25%", marginBottom: "25%" }}>
                      {status === "Shipped" ? (
                        <button
                          onClick={() => shippedHandler(_id)}
                          className="btn btn-outline-success rounded-pill"
                          disabled
                        >
                          Shipped <i className="fas fa-shipping-fast"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => shippedHandler(_id)}
                          className="btn btn-outline-success rounded-pill"
                        >
                          Shipped <i className="fas fa-shipping-fast"></i>
                        </button>
                      )}

                      {status === "Reject" ? (
                        <button
                          onClick={() => rejectHandler(_id)}
                          className="btn btn-outline-danger rounded-pill mt-4 px-4"
                          disabled
                        >
                          Reject <i className="far fa-trash-alt"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => rejectHandler(_id)}
                          className="btn btn-outline-danger rounded-pill mt-4 px-4"
                        >
                          Reject <i className="far fa-trash-alt"></i>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        {!orders.length && (
          <div className="text-center text-muted mt-4">
            <h1 style={{ fontSize: "50px" }}>No Order</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrder;
