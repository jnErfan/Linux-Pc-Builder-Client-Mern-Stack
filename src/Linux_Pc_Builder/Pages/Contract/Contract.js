import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Contract.css";

const Contract = () => {
  const history = useHistory();

  return (
    <div style={{ marginTop: "150px" }} className="backgroundImage">
      <div className="container">
        <div className="text-center">
          <h1 className="contarctUs mb-5">Contract Us</h1>
        </div>

        <div className="row row-cols-2">
          <div className="col col-12 col-md-6 col-lg-5">
            <div
              className="shadow-lg p-3 rounded-3"
              style={{ backgroundColor: "#ffffff99" }}
            >
              <h3 className="mb-4 mt-4 text-dark">Contract Info</h3>
              <div className="text-start">
                <div>
                  <i className="fas fa-home fs-4 me-3 text-secondary mt-3"></i>
                  <span className="text-secondary">
                    {" "}
                    6th floor, 000 Kazi Nazrul Islam Ave,Navana Zohura Square,
                    Dhaka 1000,
                  </span>
                </div>
                <div>
                  <i className="fas fa-phone-alt text-secondary fs-4 me-3 mt-3"></i>
                  <span className="text-secondary">+880 1978 352 135</span>
                </div>
                <div>
                  <i className="far fa-envelope text-secondary fs-4 me-3 mt-3"></i>
                  <span className="text-secondary">
                    info.webteam@linuxhbd.com
                  </span>
                </div>
                <div className="mb-4 pb-2">
                  <i className="fas fa-tty text-secondary fs-4 me-3 mt-3"></i>
                  <span className="text-secondary">(+8) 78 352 135</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-7">
            <div
              className="shadow-lg p-3 pb-4 rounded-3"
              style={{ backgroundColor: "#a09e9e50" }}
            >
              <h3 className="mb-4 mt-4 text-dark">Send Message</h3>
              <div className="text-start">
                <div className="d-flex">
                  <FormControl
                    className="me-3 w-75 py-2"
                    placeholder="Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <FormControl
                    className="me-3 w-50 py-2"
                    placeholder="Email"
                    type="email"
                    name=""
                    id=""
                  />
                  <FormControl
                    className="me-3 w-50 py-2"
                    placeholder="Subject"
                    type="Text"
                    name=""
                    id=""
                  />
                </div>
                <FormControl
                  as="textarea"
                  className="my-3 w-100"
                  placeholder="Message"
                  rows="4"
                  cols="50"
                />
              </div>
              <button
                onClick={() => history.push("/")}
                className="btn btn-info text-white px-4 container-fluid"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center shadow-lg p-3 rounded-3 mt-5"
          style={{ backgroundColor: "#ffffff99" }}
        >
          <div className="bg-info p-3 rounded-3 me-3">
            <i className="fas fa-phone-volume fs-1 text-white"></i>
          </div>
          <div>
            <p className="text-secondary">Call Us For Any Question</p>
            <h3 className="text-dark">+8801978352135</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
