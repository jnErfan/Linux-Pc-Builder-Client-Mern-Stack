import axios from "axios";
import React, { useState } from "react";
import { Alert, Form, FormControl, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [checked, setChecked] = useState(false);
  const checkedHandler = (params) => {
    setChecked(params.target.checked);
  };
  console.log(checked);
  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  
  // Make Admin With Send Admin Status
  const onSubmit = (data) => {
    const adminData = { data, checked };
    axios.put("https://linux-pc-builder-backend.herokuapp.com/makeAdmin", adminData).then((result) => {
      if (result.data.modifiedCount === 1) {
        reset();
        if (!checked) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 3000);
          }, 1000);
        } else {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAlert2(true);
            setTimeout(() => {
              setAlert2(false);
            }, 3000);
          }, 1000);
        }
      } else if (
        result.data.modifiedCount === 0 &&
        result.data.matchedCount === 1
      ) {
        if (!checked) {
          window.alert("This User Already Admin");
        } else {
          window.alert("Already Remove Please Try Another");
        }
      } else {
        if (!checked) {
          window.alert("Make Admin Failed");
        } else {
          window.alert("Remove Admin Failed");
        }
      }
    });
    console.log(data);
  };

  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px" }}
      className="container AdminContainer"
    >
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 9999,
          }}
        >
          <div style={{ marginLeft: "190px" }}>
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        </div>
      )}

      {alert && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.373)",
            zIndex: 9999,
          }}
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{ marginLeft: "190px" }}
          >
            <Alert
              variant="success w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-1s"
              style={{ position: "fixed" }}
            >
              Promote Customer To Admin Successful !!!
            </Alert>
          </div>
        </div>
      )}
      {alert2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.373)",
            zIndex: 9999,
          }}
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{ marginLeft: "190px" }}
          >
            <Alert
              variant="danger w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-3s"
              style={{ position: "fixed" }}
            >
              Remove Admin Successful !!
            </Alert>
          </div>
        </div>
      )}
      {!checked ? (
        <h1 className="text-center" style={{ color: "#2e2e66" }}>
          Make <span style={{ color: "orangered" }}>ADMIN</span>
        </h1>
      ) : (
        <h1 className="text-center ms-5" style={{ color: "red" }}>
          Remove <span style={{ color: "orangered" }}>ADMIN</span>
        </h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="shadow-lg p-5  mt-4 containerMain"
          style={{ borderRadius: "20px" }}
        >
          <FormControl
            className="my-3 py-3"
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          <Form.Group className="mb-3" controlId="formHorizontalCheck">
            <Form.Check onChange={checkedHandler} label="Remove Admin ?" />
          </Form.Group>
          {!checked ? (
            <button
              className="btn w-100 text-white py-3 mt-4"
              type="submit"
              style={{ backgroundColor: "#2e2e66" }}
            >
              Promote To Admin
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-danger w-100 text-white py-3 mt-4"
            >
              Remove To Admin
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
