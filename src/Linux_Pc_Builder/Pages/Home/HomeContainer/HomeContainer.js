import React from "react";
import ClientsReviews from "../ClientsReviews/ClientsReviews";
import Reviews from "../ClientsReviews/Review";
import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";
import OurPcPackage from "../OurPcPackage/OurPcPackage";

const HomeContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <OurPcPackage />
      <ClientsReviews />
      <Reviews />
    </div>
  );
};

export default HomeContainer;
