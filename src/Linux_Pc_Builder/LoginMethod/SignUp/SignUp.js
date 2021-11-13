import React from "react";
import { FormControl, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const {
    emailPasswordSignUp,
    error,
    setError,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();

  // Send All Login Information 
  const onSubmit = (data) => {
    setError("");
    if (data.password === data.password2) {
      const fullName = data.firstName + " " + data.lastName;
      emailPasswordSignUp(
        data.email,
        data.password,
        data.image,
        fullName,
        history,
        location
      );
    } else {
      const passwordError = "Password Did't Matched";
      setError(passwordError);
    }
  };

  // Google Login Handler
  const signUpWithGoogle = () => {
    googleSignIn(history, location);
  };

  // Github Login Handler
  const signUpWithGithub = () => {
    githubSignIn(history, location);
  };

  // Facebook Login Handler
  const signUpWithFacebook = () => {
    facebookSignIn(history, location);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="url"
                placeholder="Enter Your Image Url"
                required
                {...register("image")}
              />
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="First Name"
                required
                {...register("firstName")}
              />
              <FormControl
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="Last Name"
                required
                {...register("lastName")}
              />
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
                placeholder="Enter New Password"
                required
                {...register("password")}
              />
              <FormControl
                className="py-3 mt-4"
                width="100%"
                type="password"
                placeholder="Confirm Password"
                required
                {...register("password2")}
              />
              <p className="text-danger mt-2">
                <small>{error}</small>
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
                onClick={signUpWithGoogle}
                className="btn btn-outline-info mb-2 mx-3 rounded-circle"
                style={{ height: "70px", width: "70px" }}
              >
                <img
                  src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                  alt=""
                />
              </button>
              <button
                onClick={signUpWithGithub}
                className="btn btn-outline-info mb-2 mx-3 rounded-circle"
                style={{ height: "70px", width: "70px" }}
              >
                <img
                  src="https://img.icons8.com/color/40/000000/github--v3.png"
                  alt=""
                />
              </button>
              <button
                onClick={signUpWithFacebook}
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
