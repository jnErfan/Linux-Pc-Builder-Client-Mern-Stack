import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FloatingLabel,
  Form,
  FormControl,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

const UpdateDesktop = () => {
  const { updateId } = useParams();
  const [updateDetails, setUpdateDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const history = useHistory();
  const [images, setImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const checkedHandler = (params) => {
    setChecked(params.target.checked);
  };
  console.log(checked);

  // Update Desktop Configuration 
  useEffect(() => {
    fetch(`https://linux-pc-builder-backend.herokuapp.com/desktopDetails/${updateId}`)
      .then((res) => res.json())
      .then((data) => setUpdateDetails(data?.[0]));
  }, [updateId]);
  const {
    _id,
    pcName,
    image,
    configuration,
    Brand,
    price,
    rated,
    sell,
    stock,
    rate,
  } = updateDetails;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    let formAllData;
    if(!checked){
    data.rate = rate;
    } 
    else{
      if (!images) {
        return;
     }
      const formData = new FormData();
      formData.append('image', images);
      formData.append('pcName', data.pcName);
      formData.append('configuration', data.configuration);
      formData.append('Brand', data.Brand);
      formData.append('price', data.price);
      formData.append('sell', data.sell);
      formData.append('rated', data.rated);
      formData.append('stock', data.stock);
      formData.append('rate', rate)
      formAllData = formData
    }
   const updateData = !checked ? data : formAllData;
    if (
      data.pcName !== "" &&
      data.configuration !== "" &&
      data.Brand !== "" &&
      data.price !== "" &&
      data.rated !== "" &&
      data.sell !== ""
    ) {
     if(checked || data.image !== "") {
      axios
      .put(`https://linux-pc-builder-backend.herokuapp.com/updateDesktop/${_id}`, updateData)
      .then((result) => {
        if (result.data.modifiedCount === 1) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
              reset();
              history.push("/dashboard/manageProduct");
            }, 3000);
          }, 500);
        }
      });
     }else{
      setAlert2(true);
      setTimeout(() => {
        setAlert2(false);
      }, 2000);
     }
    } else {
      setAlert2(true);
      setTimeout(() => {
        setAlert2(false);
      }, 2000);
    }
  };
  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
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
              variant="success w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-2s"
              style={{ position: "fixed" }}
            >
              Desktop Information Update Successful
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
              variant="info w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-1s"
              style={{ position: "fixed" }}
            >
              Please Blur All Text Field. Default Value Will Worked On OnBlur
            </Alert>
          </div>
        </div>
      )}
      <div className="text-center">
        <h1>Update Desktop Collection</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow-lg px-5 pb-5" style={{ borderRadius: "20px" }}>
          <div className="row row-cols-2 mt-5 pt-5">
            <div className="col col-12 col-md-12 col-lg-6">
            {!checked ? (
       <FormControl
       className="py-3 my-4"
       width="100%"
       type="text"
       placeholder="Enter Image Url"
       required
       defaultValue={image || ""}
       {...register("image")}
     />
      ) : (
        <FormControl
        className="py-3 mt-4 mb-2"
        type="file"
        accept="image/*"
        required
        defaultValue={image || ""}
        onChange={e => setImage(e.target.files[0])}
      />
      )}
           
              <Form.Group controlId="formHorizontalCheck">
            <Form.Check  onChange={checkedHandler}  label="Update Image ?" />
          </Form.Group>

              <FormControl
                className="py-3 my-4"
                width="100%"
                type="text"
                placeholder="Desktop Name"
                required
                defaultValue={pcName || ""}
                {...register("pcName")}
              />
              <FormControl
                as="textarea"
                className="py-3 my-4"
                width="100%"
                type="name"
                placeholder="Details Configuration"
                required
                defaultValue={configuration || ""}
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
                  defaultValue={Brand || ""}
                  {...register("Brand")}
                />
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="number"
                  placeholder="Price ৳"
                  required
                  defaultValue={price || ""}
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
                  defaultValue={sell || ""}
                  {...register("sell")}
                />
                <FormControl
                  className="py-3 my-4"
                  width="100%"
                  type="number"
                  placeholder="Total Rate Count"
                  required
                  defaultValue={rated || ""}
                  {...register("rated")}
                />
              </div>
              <FloatingLabel controlId="floatingSelect" label="Stock">
                <Form.Select
                  {...register("stock")}
                  defaultValue={stock || ""}
                  aria-label=""
                >
                  <option>Available</option>
                  <option>StockOut</option>
                </Form.Select>
              </FloatingLabel>
            </div>
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
      <div className="text-center">
        <button
          className="btn btn-secondary py-2 mt-5 w-25"
          onClick={() => history.push("/dashboard/manageProduct")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateDesktop;
