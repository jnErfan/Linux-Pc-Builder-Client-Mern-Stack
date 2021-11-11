import React from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import Rating from "react-rating";

const AddDesktop = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1 className="text-center mt-5 ms-5" style={{ color: "#2e2e66" }}>
        Add Desktop Collection
      </h1>
      <div>
        <form>
          <div className="shadow-lg px-4 pb-5 rounded">
            <div className="row row-cols-2 mt-5">
              <div className="col col-12 col-md-12 col-lg-6">
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="url"
                  placeholder="Enter Image Url"
                  required
                />
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="text"
                  placeholder="Desktop Name Name"
                  required
                />
                <FormControl
                  as="textarea"
                  className="py-3 my-4"
                  width="100%"
                  type="name"
                  placeholder="Details Configuration"
                  required
                />
              </div>
              <div className="col col-12 col-md-12 col-lg-6">
                <div className="d-flex">
                  <FormControl
                    className="py-3 my-4 me-3"
                    width="100%"
                    type="name"
                    placeholder="Brand"
                    required
                  />
                  <FormControl
                    className="py-3 my-4"
                    width="100%"
                    type="number"
                    placeholder="Price ৳"
                    required
                  />
                </div>
                <div className="d-flex">
                  <FormControl
                    className="py-3 my-4 me-3"
                    width="100%"
                    type="number"
                    placeholder="Total Sell"
                    required
                  />
                  <FormControl
                    className="py-3 my-4"
                    width="100%"
                    type="number"
                    placeholder="Total Rate Count"
                    required
                  />
                </div>
                <FloatingLabel controlId="floatingSelect" label="Stock">
                  <Form.Select aria-label="">
                    <option>Available</option>
                    <option value="2">StockOut</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </div>
            <div className="text-center mt-3">
              <Rating
                onChange={(rate) => alert(rate)}
                emptySymbol={
                  <i
                    className="far fa-star fs-2"
                    style={{ color: "#FFA500" }}
                  ></i>
                }
                fullSymbol={
                  <i
                    className="fas fa-star fs-2"
                    style={{ color: "#FFA500" }}
                  ></i>
                }
                fractions={2}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-3 mt-4">
              Add To Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDesktop;
