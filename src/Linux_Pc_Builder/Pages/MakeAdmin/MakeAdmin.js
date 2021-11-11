import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const MakeAdmin = () => {
  const [checked, setChecked] = useState(false);
  const checkedHandler = (params) => {
    setChecked(params.target.checked);
  };
  console.log(checked);
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1 className="text-center ms-5" style={{ color: "#2e2e66" }}>
        Make <span style={{ color: "orangered" }}>ADMIN</span>
      </h1>
      <form>
        <div className="shadow-lg p-5 rounded mt-4">
          <FormControl
            className="my-3 py-3"
            type="email"
            placeholder="Email"
            required
          />
          <Form.Group className="mb-3" controlId="formHorizontalCheck">
            <Form.Check onChange={checkedHandler} label="Remove Admin ?" />
          </Form.Group>
          {!checked ? (
            <button
              className="btn w-100 text-white py-3 mt-4"
              style={{ backgroundColor: "#2e2e66" }}
            >
              Promote To Admin
            </button>
          ) : (
            <button className="btn btn-danger w-100 text-white py-3 mt-4">
              Demote To Admin
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
