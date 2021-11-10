import React from "react";
import { Button, Row } from "react-bootstrap";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="bannerContainer2">
      <div className="bannerContainer">
        <Row sx={1} md={2} lg={2} className="bannerItem container pt-5">
          <div className="col col-12 col-md-6 col-lg-6">
            <h1
              style={{
                fontSize: "60px",
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "bold",
              }}
              className="bannerTitle"
            >
              <span style={{ color: "orangered" }}> Linux </span>
              <span style={{ color: "#171E56" }}> Desktop </span>
              <span className="text-black">
                <Typewriter
                  options={{
                    strings: ["Builder", "House", "Online Shop"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h3 className="mt-4 dreamPc">
              Build Your Dream PC With Our Online Desktop Shop
            </h3>
            <Button
              style={{ fontFamily: "'Concert One', cursive" }}
              variant="outline-light py-3 px-3 mt-4"
            >
              See Our All Pc Collection
            </Button>
          </div>
          <div className="col col-12 col-md-6 col-lg-6 sliderContainer">
            {/* Sliding Desktop Image */}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
