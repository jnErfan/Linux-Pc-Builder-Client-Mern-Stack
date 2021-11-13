import React from "react";
import "./MondaySell.css";

const MondaySell = () => {
  const featured = [
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png",
      name: "All Laptop",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/desktop-48x48.png",
      name: "Desktop",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png",
      name: "Processor",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png",
      name: "Graphics Card",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/SSD-48x48.png",
      name: "SSD",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/keyboard-48x48.png",
      name: "Keyboard",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/accessories-48x48.png",
      name: "Mouse",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png",
      name: "Headphone",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/webcam-48x48.png",
      name: "Webcam",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png",
      name: "Processor",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png",
      name: "Printer",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/photocopier-48x48.png",
      name: "Projector",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png",
      name: "Router",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gadget-48x48.png",
      name: "Gadget",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png",
      name: "Smart Watch",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png",
      name: "Headphone",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/cable-converter-48x48.png",
      name: "Converter & Cable",
    },
    {
      img: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png",
      name: "Graphics Card",
    },
  ];
  return (
    <div
      style={{ marginTop: "100px", marginBottom: "100px" }}
      className="container"
    >
      <div className="text-center">
        <h1 style={{ color: "#373540", fontFamily: "'Rubik', sans-serif" }}>
          Featured Category
        </h1>
        <p>Get Your Desired Product from Featured Category!</p>
        <div className="row row-cols-8 g-4 mt-5">
          {featured.map((feature) => (
            <div className="col col-4 col-md-3 col-lg-2">
              <div className="d-inline-block featured" style={{}}>
                <img src={feature.img} alt="" />
                <p>{feature.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-lg p-2 mt-5" style={{ borderRadius: "20px" }}>
          <img
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            width="100%"
            src="https://i.ibb.co/6v6wtGR/navbarimg.png"
            alt=""
          />
          <div className="row row-cols-2">
            <div className="col col-12 col-md-12 col-lg-6">
              <img
                style={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
                width="100%"
                src="https://www.startech.com.bd/image/cache/catalog/home/banner/11-11/Flash-Sale/home-982x500.jpg"
                alt=""
              />
            </div>
            <div className="col col-12 col-md-12 col-lg-6">
              <img
                style={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
                width="100%"
                src="https://www.startech.com.bd/image/cache/catalog/home/banner/11-11/11-11-LAPTOP-DEAL-home-banner-982x500-982x500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MondaySell;
