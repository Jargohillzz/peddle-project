import React from "react";
import { Link } from "react-router-dom";

const S = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <h2 className="logo">PEDDLE</h2>
        <h2 className="sign-main-text">sign in</h2>
        <form>
          <div className="form form-email">
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
          </div>
          <div className="form form-password">
            <label htmlFor="password">password</label>
            <input type="text" id="password" />
          </div>
          <div className="remember-section">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p className="forgot">forgot password ?</p>
          </div>
          <button className="submit-btn w-100" type="submit">
            sign up
          </button>
        </form>
        <p className="sign-toggle">
          New to PEDDLE?{" "}
          <Link to="/signup">
            <span>sign up here</span>
          </Link>
        </p>
        <p className="go-home">
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default S;
