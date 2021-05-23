import React from "react";
import Hero from "../globals/Hero";
import bgImg from "../../images/homeBcg.jpeg";
import BannerWrapper from "../globals/Banner";

const text =
  "Your perfect getaway awaits you at Beaches all-inclusive resorts in Turks & Caicos and Jamaica. Play on pristine, white–sand beaches caressed by crystal-clear seas. Spend your family vacation in luxurious rooms and suites.";

const Header = () => {
  return (
    <Hero img={bgImg}>
      <BannerWrapper
        greeting="Welcome to"
        title="Beach resort"
        text={text}
      ></BannerWrapper>
    </Hero>
  );
};

export default Header;
