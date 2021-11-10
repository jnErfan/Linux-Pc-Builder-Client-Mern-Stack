import React from "react";
import ClientsReviews from "../ClientsReviews/ClientsReviews";
import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";
import OurPcPackage from "../OurPcPackage/OurPcPackage";

const HomeContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <OurPcPackage />
      <ClientsReviews />
    </div>
  );
};

export default HomeContainer;
