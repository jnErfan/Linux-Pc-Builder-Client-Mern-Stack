import React from "react";
import ClientsReviews from "../ClientsReviews/ClientsReviews";
import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";
import MondaySell from "../MondaySell/MondaySell";
import OurPcPackage from "../OurPcPackage/OurPcPackage";

const HomeContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <OurPcPackage />
      <ClientsReviews />
      <MondaySell />
    </div>
  );
};

export default HomeContainer;
