import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
          <path
            fill="#003F92"
            fillOpacity="1"
            d="M0,0L40,32C80,64,160,128,240,144C320,160,400,128,480,138.7C560,149,640,203,720,218.7C800,235,880,213,960,197.3C1040,181,1120,171,1200,186.7C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footerContainer2">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1a1531"
              fillOpacity="1"
              d="M0,0L40,32C80,64,160,128,240,144C320,160,400,128,480,138.7C560,149,640,203,720,218.7C800,235,880,213,960,197.3C1040,181,1120,171,1200,186.7C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div className="footerContainer">
            <div className="px-4">
              <div className="row row-cols-4 pt-5">
                <div className="col col-12 col-md-6 col-lg-3 text-start firstColum mb-5">
                  <h2 className="mb-4">SUPPORT</h2>
                  <div className="d-flex justify-content-start align-items-center buttonMake">
                    <div>
                      <i className="fas fa-phone-alt fs-3 mx-4"></i>
                    </div>

                    <div
                      className="ps-3"
                      style={{ borderLeft: "1px solid #6F898D" }}
                    >
                      <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                        9am - 8pm
                      </span>
                      <h5 style={{ color: "#EF4A23" }}>01978352135</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center buttonMake mt-4">
                    <div>
                      <i className="fas fa-map-marker-alt  fs-3 mx-4"></i>
                    </div>

                    <div
                      className="ps-3"
                      style={{ borderLeft: "1px solid #6F898D" }}
                    >
                      <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                        Store Locator
                      </span>
                      <h5 style={{ color: "#EF4A23" }}>Find Our Stores</h5>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6 col-lg-2  mb-5 text-center">
                  <h6 className="d-block mb-4">ABOUT US</h6>{" "}
                  <div className="d-block">
                    <Link className="footer_nav  d-block my-2" to="/contract">
                      Contract Us
                    </Link>{" "}
                    <Link className="footer_nav d-block my-2" to="/">
                      Get Help
                    </Link>{" "}
                    <Link className="footer_nav d-block my-2" to="/">
                      Online Delivery
                    </Link>{" "}
                    <Link className="footer_nav  d-block my-2" to="/">
                      Support
                    </Link>{" "}
                    <Link className="footer_nav  d-block my-2" to="/">
                      Report A Bug
                    </Link>{" "}
                    <Link className="footer_nav  d-block my-2" to="/contract">
                      Terms Privacy
                    </Link>
                  </div>
                </div>
                <div className="col col-12 col-md-6 col-lg-3  mb-5 thirdColum">
                  <div className="text-start ps-2 ">
                    <div>
                      <h2 className="fontTeko">STAY CONNECTED</h2>
                      <p className="mt-3">Linux Pc Builder Online</p>

                      <small style={{ color: "#8f8f8f" }}>
                        {" "}
                        6th floor, 000 Kazi Nazrul Islam Ave,Navana Zohura
                        Square, Dhaka 1000,
                      </small>

                      <p className="mt-3">Email:</p>
                      <small
                        className="footer_nav"
                        style={{ color: "#ef4a23" }}
                      >
                        info.webteam@linuxhbd.com
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6 col-lg-4  mb-5 thirdColum">
                  <div className="text-start ps-2">
                    <div>
                      <h1 className="fontTeko">PAYMENT WITH</h1>
                      <img
                        className="w-100"
                        src="https://i.ibb.co/YjC1kZh/FOOTERii-MAGE.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-3 d-flex mt-3">
                      <input
                        className="inputField"
                        placeholder="Your Email"
                        type="email"
                        required
                        disabled
                      />
                      <input
                        type="submit"
                        className="buttonField btn"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="footar-icon text-center mt-3">
                <a href="https://www.facebook.com/jnerfan">
                  {" "}
                  <i className="fab fa-facebook fb pe-3"></i>{" "}
                </a>
                <a href="https://www.instagram.com/j.n.erfan/">
                  <i className="fab fa-instagram ins pe-3"></i>
                </a>
                <a href="https://twitter.com/JNErfan">
                  <i className="fab fa-twitter twt pe-3"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCRJ5d8nP2PBmv6rYdtNfFag">
                  <i className="fab fa-youtube yt"></i>
                </a>
              </div>
              <div className="py-4 text-center">
                <small>
                  <i className="far fa-copyright"></i> Design With Love By
                  <span className="text-danger fw-bold ms-2"> J.N.Erfan</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HashLink className="verticalScrolBar shadow-sm" to="#">
            <i className="fas fa-angle-up"></i>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
