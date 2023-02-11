import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [isLock, setIsLock] = useState(document.body.style.overflow === "auto");
  const handleToggle = (e) => {
    navRef.current.classList.toggle("show-links");
    setIsLock(!isLock);
  };
  useEffect(() => {
    document.body.style.overflow = isLock ? "hidden" : "auto";
  });

  const links = [
    {
      id: 1,
      url: "/",
      text: "About",
    },
    {
      id: 2,
      url: "/",
      text: "FAQs",
    },
    {
      id: 3,
      url: "/",
      text: "Pricing",
    },
    {
      id: 4,
      url: "/",
      text: "Testimonials",
    },
  ];
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <div className="nav-logo">
            <h2 className="logo">PEDDLE</h2>
          </div>
          <button class="nav-toggle" onClick={handleToggle}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div className="nav-links">
          <div className="links-container" ref={navRef}>
            <div className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <p key={id}>
                    <a href={url} className="link">
                      {text}
                    </a>
                  </p>
                );
              })}
            </div>
            <div className="button-container">
              <button>
                <Link to="/signin" className="Link btn">
                  Sign In
                </Link>
              </button>
              <button>
                <Link to="signup" className="Link btn-outline">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
