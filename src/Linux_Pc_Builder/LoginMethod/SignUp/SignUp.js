import React from "react";
import { FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div
        style={{ marginTop: "100px", marginBottom: "100px" }}
        className="container"
      >
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: "'Teko', sans-serif", fontSize: "60px" }}>
            SIGN <span className="text-danger">UP</span>
          </h1>
        </div>
        <Row xs={1} md={2} lg={2}>
          <div className="col col-12 col-md-6 col-lg-6 mt-5">
            <form onSubmit={"Submited"}>
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="url"
                placeholder="Enter Your Image Url"
                required
              />
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="First Name"
                required
              />
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="Last Name"
                required
              />
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
                placeholder="Enter New Password"
                required
              />
              <FormControl
                className="py-3 mt-4"
                width="100%"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <p className="text-danger mt-2">
                <small>Your Password Is Incorrect</small>
              </p>
              <button className="btn btn-danger w-100 py-2" type="submit">
                Sign Up
              </button>
            </form>
            {/* Form End  */}

            <div className="mt-4 text-center">
              <p className="text-secondary my-4">
                ____________________Or____________________
              </p>
              <p className="mb-4 text-secondary">
                You Already Have An Account ?{" "}
                <Link to="login" className="ms-3">
                  Login
                </Link>
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
              src="https://i.ibb.co/mBpbT8C/Mobile-login.jpg
              https://i.ibb.co/qpgyvhy/3099609.jpg"
              alt=""
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
