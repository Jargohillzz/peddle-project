import Content from "./Content";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import React from "react";

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Content />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Main;
