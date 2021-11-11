import React from "react";
import comingSoon from "./cominSoon.png";

const Pay = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="fw-bold" style={{ color: "#2e2e66" }}>
          Pay Now
        </h1>
        <h5 className="mt-5">This Will Be Completed In The Next Milestone.</h5>
        <img width="50%" src={comingSoon} alt="" />
      </div>
      <div className="row row-cols-3" style={{ marginTop: "100px" }}>
        <div className="col col-12 col-md-6 col-lg-4">
          <img
            width="100%"
            src="https://www.bdshop.com/pub/media/catalog/product/b/k/bkash-payment-gateway-plugin-for-magento-2.png"
            alt=""
          />
        </div>
        <div className="col col-12 col-md-6 col-lg-4">
          <img
            width="100%"
            src="https://user-images.githubusercontent.com/30390432/90474602-7334f700-e147-11ea-8e4e-6d93ac1d25dc.png"
            alt=""
          />
          <img
            width="100%"
            src="https://utshobbd.com/wp-content/uploads/2019/12/payment.jpg"
            alt=""
          />
        </div>
        <div className="col col-12 col-md-6 col-lg-4">
          <img
            width="100%"
            src="https://devathon.com/wp-content/uploads/2020/02/Top-10-Payment-Gateways-Devathon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pay;
