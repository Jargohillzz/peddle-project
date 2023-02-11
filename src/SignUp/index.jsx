import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <h2 className="logo">PEDDLE</h2>
        <h2 className="sign-main-text">sign up</h2>
        <p>Please fill in this form to create an account</p>
        <form>
          <div className="form-group form-name">
            <div className="form first-name">
              <label htmlFor="firstName">first name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form last-name">
              <label htmlFor="lastName">last name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div className="form form-email">
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
          </div>
          <div className="form-group form-passwords">
            <div className="form form-password">
              <label htmlFor="password">password</label>
              <input type="password" id="password" />
            </div>
            <div className="form form-confirm">
              <label htmlFor="confirm">confirm password</label>
              <input type="password" id="confirm" />
            </div>
          </div>
          <div className="form-terms">
            <input type="checkbox" />
            <label>
              i accept the <span>terms of use</span> &{" "}
              <span>privacy policy</span>
            </label>
          </div>
          <button className="submit-btn" type="submit">
            sign up
          </button>
        </form>
        <p className="sign-toggle">
          Alreadt have an account{" "}
          <Link to="/signin">
            <span>sign in here</span>
          </Link>
        </p>
        <p className="go-home">
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
