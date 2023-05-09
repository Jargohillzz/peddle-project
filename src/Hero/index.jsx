import React from "react";
import "./Hero.css";
import heroSVG from "../assets/heroSvg.svg";
import serverSVG from "../assets/server.svg";
import locationSVG from "../assets/location.svg";
import userSVG from "../assets/user.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroIcons = [
    {
      id: 1,
      image: userSVG,
      text: "users",
      num: "90+",
    },
    {
      id: 2,
      image: locationSVG,
      text: "locations",
      num: "30+",
    },
    {
      id: 3,
      image: serverSVG,
      text: "servers",
      num: "50+",
    },
  ];
  return (
    <div className="hero">
      <div className="hero-cont">
        <div className="hero-cont-left">
          <h1 className="hero-h1">We Are Everything We Aspire To BE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </p>
          <button>
            <Link to="/signin" className="Link heroBtn">
              <p>get started</p>
            </Link>
          </button>
        </div>
        <div className="hero-cont-right">
          <div className="hero-img">
            <img src={heroSVG} alt="hero image" />
          </div>
        </div>
      </div>
      <div className="hero-icons">
        {heroIcons.map((heroIcon) => {
          const { id, image, text, num } = heroIcon;
          return (
            <div className="hero-icon" key={id}>
              <div className="hero-icon-img">
                <img src={image} alt="hero icons" />
              </div>
              <div className="hero-icon-text">
                <h2>{num}</h2>
                <p>{text} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
