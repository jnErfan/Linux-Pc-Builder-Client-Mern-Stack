import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  FloatingLabel,
  Form,
  FormControl,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import "./AddDesktop.css";

//  Add Desktop Information In Database And Successful Message
const AddDesktop = () => {
  const { register, handleSubmit, reset } = useForm();
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [image, setImage] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    if (!image) {
        return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('pcName', data.pcName);
    formData.append('configuration', data.configuration);
    formData.append('Brand', data.Brand);
    formData.append('price', data.price);
    formData.append('sell', data.sell);
    formData.append('rated', data.rated);
    formData.append('stock', data.stock);
    formData.append('rate', rate)
    
    axios.post("https://linux-pc-builder-backend.herokuapp.com/addDesktop", formData).then((result) => {
      if (result.data.insertedId) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
            reset();
          }, 3000);
        }, 500);
      }
    });
  };
  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
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
              variant="success w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-2s"
              style={{ position: "fixed" }}
            >
              Desktop Has Been Added Please Check
            </Alert>
          </div>
        </div>
      )}
      <h1 className="text-center mt-5 ms-5" style={{ color: "#2e2e66" }}>
        Add Desktop Collection
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="shadow-lg px-5 pb-5 container1"
            style={{ borderRadius: "20px" }}
          >
            <div className="row row-cols-2 mt-5 pt-5">
              <div className="col col-12 col-md-12 col-lg-6">
                <FormControl
                  className="py-3 my-4"
                  type="file"
                  accept="image/*"
                  required
                  onChange={e => setImage(e.target.files[0])}
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
