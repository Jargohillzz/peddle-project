import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <h2 className="logo">PEDDLE</h2>
          <p>
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
            ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula
            at, laoreet mag.
          </p>
        </div>
        <div className="footer-right">
          <div className="list">
            <h3>product</h3>
            <p>praescent</p>
            <p>laoreet</p>
            <p>laoreet</p>
            <p>server</p>
          </div>
          <div className="list">
            <h3>engage</h3>
            <p>mauris</p>
            <p>aenean</p>
            <p>linsean</p>
            <p>lingula</p>
          </div>
          <div className="list">
            <h3>earn money</h3>
            <p>ultrices</p>
            <p>fusce</p>
          </div>
        </div>
      </div>
      <div className="trademark">
        <p>&copy;{year}PEDDLE</p>
      </div>
    </footer>
  );
};

export default Footer;
