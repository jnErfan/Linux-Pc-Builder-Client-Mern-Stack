import React from "react";
import { FormControl, Row } from "react-bootstrap";

const Login = () => {
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
      <Row xs={1} md={2} lg={2}>
        <div className="col col-12 col-md-6 col-lg-6 mt-5">
          <form onSubmit={"Submited"}>
            <FormControl
              className="py-3 my-4"
              width="100%"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <FormControl
              className="py-3 mt-4"
              width="100%"
              type="password"
              placeholder="Enter Your Email"
              required
            />
            <p className="text-danger mt-2">
              <small>Your Password Is Incorrect</small>
            </p>
            <button className="btn text-primary my-3">Forget Password ?</button>
            <button className="btn btn-danger w-100 py-2" type="submit">
              Login
            </button>
          </form>
          {/* Form End  */}

          <div className="mt-4 text-center">
            <p className="text-secondary my-4">
              ____________________Or____________________
            </p>
            <button
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                alt=""
              />
            </button>
            <button
              className="btn btn-outline-info mb-2 mx-3 rounded-circle"
              style={{ height: "70px", width: "70px" }}
            >
              <img
                src="https://img.icons8.com/color/40/000000/github--v3.png"
                alt=""
              />
            </button>
            <button
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
