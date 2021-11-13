import React, { useState } from "react";
import { FormControl, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [smShow, setSmShow] = useState(false);
  const [email, setEmail] = useState("");
  const {
    emailPasswordLogin,
    error,
    resetPassword,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, history, location);
  };
  //  Reset Password
  const resetHandler = () => {
    resetPassword(email);
  };

  // Google Login Handler
  const loginWithGoogle = () => {
    googleSignIn(history, location);
  };

  // Github Login Handler
  const loginWithGithub = () => {
    githubSignIn(history, location);
  };

  // Facebook Login Handler
  const loginWithFacebook = () => {
    facebookSignIn(history, location);
  };

  return (
    <div
      style={{ marginTop: "100px", marginBottom: "100px" }}
      className="container"
    >
      <div className="text-center mb-5">
        <h1 style={{ fontFamily: "'Teko', sans-serif", fontSize: "60px" }}>
          LOG<span className="text-danger">IN</span>
        </h1>
      </div>
      <div className="shadow-lg d-inline-block p-3 rounded">
        <small className="fw-bold">Default Admin</small> <br />
        <small>admin@gmail.com</small> <br />
        <small>asdf1234</small>
      </div>
      <Row xs={1} md={2} lg={2}>
        <div className="col col-12 col-md-6 col-lg-6 mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              className="py-3 my-4"
              width="100%"
              type="email"
              placeholder="Enter Your Email"
              required
              {...register("email")}
            />
            <FormControl
              className="py-3 mt-4"
              width="100%"
              type="password"
              placeholder="Enter Password"
              required
              {...register("password")}
            />
            <p className="text-danger mt-2">
              <small>{error}</small>
            </p>
            <button
              onClick={() => setSmShow(true)}
              className="btn text-primary my-3"
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
            <button className="btn btn-danger w-100 py-2" type="submit">
              Login
            </button>
          </form>
          {/* Form End  */}

          <div className="mt-4 text-center">
            <p className="text-secondary my-4">
              ____________________Or____________________
            </p>
            <p className="mb-4 text-secondary">
              You Don't Have An Account ?{" "}
              <Link to="signup" className="ms-3">
                Sign Up
              </Link>
            </p>
            <button
              onClick={loginWithGoogle}
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                alt=""
              />
            </button>
            <button
              onClick={loginWithGithub}
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/color/40/000000/github--v3.png"
                alt=""
              />
            </button>
            <button
              onClick={loginWithFacebook}
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/facebook-new.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="col col-12 col-md-6 col-lg-6">
          <img
            className="w-100"
            src="https://i.ibb.co/qpgyvhy/3099609.jpg"
            alt=""
          />
        </div>
      </Row>
    </div>
  );
};

export default Login;
