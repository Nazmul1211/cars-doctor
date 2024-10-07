import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import ContactBanner from "../ContactBanner/ContactBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ContactBanner></ContactBanner>
    </div>
  );
};

export default Home;
