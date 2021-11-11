import React from "react";
import { FormControl } from "react-bootstrap";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminLoginContainer">
      <div className="d-flex justify-content-center container">
        <div className="shadow-lg p-5 rounded bg-light">
          <h1 className="text-center mx-5 fw-bold">
            <span style={{ color: "orangered" }}>ADMIN</span> PANEL
          </h1>

          <form>
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
              type="password"
              placeholder="Password"
              required
            />
            <p className="text-danger">
              <small>Your Password Is Incorrect</small>
            </p>
            <button className="btn text-primary mb-3">Forget Password ?</button>
            <button
              className="btn w-100 text-white"
              style={{ backgroundColor: "orangered" }}
              type="submit"
            >
              Login
            </button>
            <div className="text-center my-3">
              <p className="text-secondary">__________ Or __________</p>
            </div>
          </form>
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
