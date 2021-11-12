import axios from "axios";
import React, { useState } from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";

const AddDesktop = () => {
  const { register, handleSubmit, reset } = useForm();
  const [rate, setRate] = useState(0);
  const onSubmit = (data) => {
    data.rate = rate;
    axios.post("http://localhost:5000/addDesktop", data).then((result) => {
      if (result.data.insertedId) {
        alert("Desktop Add Successful");
        reset();
      }
    });
  };
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1 className="text-center mt-5 ms-5" style={{ color: "#2e2e66" }}>
        Add Desktop Collection
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-lg px-5 pb-5" style={{ borderRadius: "20px" }}>
            <div className="row row-cols-2 mt-5 pt-5">
              <div className="col col-12 col-md-12 col-lg-6">
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="url"
                  placeholder="Enter Image Url"
                  required
                  {...register("image")}
                />
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="text"
                  placeholder="Desktop Name"
                  required
                  {...register("pcName")}
                />
                <FormControl
                  as="textarea"
                  className="py-3 my-4"
                  width="100%"
                  type="name"
                  placeholder="Details Configuration"
                  required
                  {...register("configuration")}
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
                    {...register("Brand")}
                  />
                  <FormControl
                    className="py-3 my-4"
                    width="100%"
                    type="number"
                    placeholder="Price ৳"
                    required
                    {...register("price")}
                  />
                </div>
                <div className="d-flex">
                  <FormControl
                    className="py-3 my-4 me-3"
                    width="100%"
                    type="number"
                    placeholder="Total Sell"
                    required
                    {...register("sell")}
                  />
                  <FormControl
                    className="py-3 my-4"
                    width="100%"
                    type="number"
                    placeholder="Total Rate Count"
                    required
                    {...register("rated")}
                  />
                </div>
                <FloatingLabel controlId="floatingSelect" label="Stock">
                  <Form.Select {...register("stock")} aria-label="">
                    <option>Available</option>
                    <option>StockOut</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </div>
            <div className="text-center mt-3">
              <Rating
                onChange={(rate) => setRate(rate)}
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
            <button
              type="submit"
              className="btn w-100 py-3 mt-4 text-white"
              style={{ backgroundColor: "#2e2e66" }}
            >
              Add To Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDesktop;
