import React from "react";
import "./Preloader.css";
import { HashLoader } from "react-spinners";

const Preloader = () => {
  return (
    <section className="preloader_container">
      <div>
        <HashLoader color={"#c4b7e4"} size={150} />
      </div>
    </section>
  );
};

export default Preloader;
