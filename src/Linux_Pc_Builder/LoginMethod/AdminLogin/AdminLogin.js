import React, { useState } from "react";
import { FormControl, Modal } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./AdminLogin.css";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const [smShow, setSmShow] = useState(false);
  const { error, googleSignIn, emailPasswordLogin, resetPassword } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, history, location);
  };

  // Google Login Handler
  const adminLoginWithGoogle = () => {
    googleSignIn(history, location);
  };
  const resetHandler = () => {
    resetPassword(email);
  };

  return (
    <div className="adminLoginContainer">
      <div className="d-flex justify-content-center container">
        <div
          className="shadow-lg p-5 bg-light"
          style={{ borderRadius: "20px" }}
        >
          <h1 className="text-center mx-5 fw-bold">
            <span style={{ color: "orangered" }}>ADMIN</span> PANEL
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              className="py-3 my-4"
              width="100%"
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
            <FormControl
              className="py-3 mt-4"
              width="100%"
              type="password"
              placeholder="Password"
              required
              {...register("password")}
            />
            <p className="text-danger">
              <small>{error}</small>
            </p>
            <button
              onClick={() => setSmShow(true)}
              className="btn text-primary mb-3"
            >
              Forget Password ?
            </button>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              className="mt-5"
            >
              <Modal.Body className="p-4 rounded">
                <h6 className="text-danger my-3">{error}</h6>

                <FormControl
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-100"
                  type="email"
                  placeholder="Enter Account Email"
                />
                <button
                  onClick={resetHandler}
                  className="btn btn-outline-success w-100 mt-4"
                >
                  Send Mail
                </button>
              </Modal.Body>
            </Modal>
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
              onClick={adminLoginWithGoogle}
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
