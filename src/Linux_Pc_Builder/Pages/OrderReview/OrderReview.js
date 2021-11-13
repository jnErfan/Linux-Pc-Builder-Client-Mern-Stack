import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";

const OrderReview = () => {
  const [carts, setCart] = useState([]);
  const [deleteToCart, setDeleteToCart] = useState("");
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/addToCartOrder?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setDeleteToCart(data);
      });
  }, [user.email, deleteToCart]);

  let total = 0;
  for (const cart of carts) {
    total = Number(cart.price) + total;
  }
  const shippingHandler = () => {
    alert("SAD TO SAY, I COULDN'T FINISH DUE TO LACK OF TIME");
    history.push("/orderConfirm");
  };
  const cancelHandler = (id) => {
    axios
      .delete(`http://localhost:5000/deleteCartOrder/${id}`)
      .then((result) => {
        if (result.data.deletedCount) {
          alert("Delete Successful");
        }
      });
  };
  return (
    <div style={{ marginBottom: "100px" }}>
      <h1 className="text-center mt-5">Review Orders</h1>
      <div>
        <div className="row row-cols-2 mt-5">
          <div className="col col-12 col-md-6 col-lg-8">
            {!carts.length ? (
              <div>
                <h1 className="text-center text-muted">No Cart Item</h1>
              </div>
            ) : (
              <div className="row row-cols-2 mt-5">
                {carts.map(({ _id, pcName, image, price }) => (
                  <div className="col col-12 col-md-6 col-lg-6" key={_id}>
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
                            src={image}
                            className="img-fluid w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h6 className="text-dark">{pcName}</h6>
                            <div className="d-flex justify-content-around">
                              <h6>
                                {price} <span className="fw-bold">৳</span>{" "}
                              </h6>
                              <button
                                onClick={() => cancelHandler(_id)}
                                className="btn btn-danger  p-1"
                              >
                                <i className="far fa-trash-alt fs-5"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col col-12 col-md-6 col-lg-4 mt-5">
            <div
              className="shadow-lg p-3"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="text-center fw-bold">
                <h4>Order Cart</h4>
              </div>
              <Table
                responsive="sm"
                className="shadow-lg"
                style={{
                  borderRadius: "20px",
                }}
              >
                <tbody>
                  <tr>
                    <td className="border-0 p-4">
                      <i className="fas fa-cart-plus fs-3"></i>
                    </td>
                    <td className="p-4">
                      <h3>
                        {carts.length}{" "}
                        <i
                          className="fas fa-shopping-cart"
                          style={{ fontSize: "15px" }}
                        ></i>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0  p-4">
                      <h5 className="mt-2">Total Price</h5>
                    </td>
                    <td className=" p-4">
                      <h4>{total}</h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div onClick={shippingHandler} className="text-center">
                <button className="btn btn-dark">Proceed To Shipping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
