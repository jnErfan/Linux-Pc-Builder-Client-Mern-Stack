import React from "react";
import { useHistory } from "react-router-dom";

const OrderConfirm = () => {
  const history = useHistory();

  return (
    <div
      className="container text-center"
      style={{ marginTop: "40px", marginBottom: "100px" }}
    >
      <img
        style={{ position: "absolute" }}
        width="70%"
        src="https://c.tenor.com/v35v-zbtwnUAAAAi/confetti.gif"
        alt=""
      />
      <img
        width="70%"
        src="https://cdn.dribbble.com/users/5804730/screenshots/14516978/media/b0978897e159ccefcd7f6e25e6c4b4ca.gif"
        alt=""
      />
      <h1 className="text-info">
        {" "}
        Congratulation Your Order Has Been Confirmed
      </h1>
      <br />
      <button
        onClick={() => history.push("/")}
        className="btn btn-info text-white"
      >
        Back To Home
      </button>
    </div>
  );
};

export default OrderConfirm;
