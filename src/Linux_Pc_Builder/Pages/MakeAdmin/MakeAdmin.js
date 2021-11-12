import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [checked, setChecked] = useState(false);
  const checkedHandler = (params) => {
    setChecked(params.target.checked);
  };
  console.log(checked);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const adminData = { data, checked };
    axios.put("http://localhost:5000/makeAdmin", adminData).then((result) => {
      if (result.data.modifiedCount === 1) {
        reset();
        if (!checked) {
          alert("Make Customer To Admin Successful");
        } else {
          alert("Remove Admin Successful");
        }
      } else if (
        result.data.modifiedCount === 0 &&
        result.data.matchedCount === 1
      ) {
        if (!checked) {
          alert("This User Already Admin");
        } else {
          alert("Already Remove");
        }
      } else {
        if (!checked) {
          alert("Make Admin Failed");
        } else {
          alert("Remove Admin Failed");
        }
      }
    });
    console.log(data);
  };

  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px" }}
      className="container"
    >
      {!checked ? (
        <h1 className="text-center ms-5" style={{ color: "#2e2e66" }}>
          Make <span style={{ color: "orangered" }}>ADMIN</span>
        </h1>
      ) : (
        <h1 className="text-center ms-5" style={{ color: "red" }}>
          Remove <span style={{ color: "orangered" }}>ADMIN</span>
        </h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow-lg p-5  mt-4" style={{ borderRadius: "20px" }}>
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
              Demote To Admin
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
