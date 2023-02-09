import React from "react";
import "./Content.css";
import provideSVG from "../assets/provideImg.svg";
import freeSVG from "../assets/freeSVG.svg";
import standardSVG from "../assets/standardSVG.svg";
import premiumSVG from "../assets/premiumSVG.svg";
import netflixSVG from "../assets/netflixSVG.svg";
import discordSVG from "../assets/discordSVG.svg";
import redditSVG from "../assets/redditSVG.svg";
import spotifySVG from "../assets/spotifySVG.svg";
import amazonSVG from "../assets/amazonSVG.svg";

const Content = () => {
  return (
    <div className="content">
      <section className="provide-section">
        <div className="provide-img">
          <img src={provideSVG} alt="provide art" />
        </div>
        <div className="provide-text">
          <h2 className="provide-h2">Features We Provide For You</h2>
          <p className="provide-p">
            Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
            eu sem finibus lacinia nec pulvinar.
          </p>
          <div className="provide-pointers">
            <div className="provide-point">
              <div className="provide-box"></div>
              <p>Curabitur tempor justo</p>
            </div>
            <div className="provide-point">
              <div className="provide-box"></div>
              <p>Curabitur tempor justo</p>
            </div>
            <div className="provide-point">
              <div className="provide-box"></div>
              <p>Curabitur tempor justo</p>
            </div>
            <div className="provide-point">
              <div className="provide-box"></div>
              <p>Curabitur tempor justo</p>
            </div>
          </div>
        </div>
      </section>
      <section className="plan-section">
        <h2>choose your plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
        <div className="plans">
          <div className="plan">
            <div className="plan-top">
              <div className="plan-img">
                <img src={freeSVG} alt="free plan" />
              </div>
              <h3 className="plan-name">free plan</h3>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
            </div>
            <div className="plan-bottom">
              <h2>
                <span className="plan-amount">FREE</span>
              </h2>
              <button className="selectBtn">select</button>
            </div>
          </div>
          <div className="plan">
            <div className="plan-top">
              <div className="plan-img">
                <img src={standardSVG} alt="standard plan" />
              </div>
              <h3 className="plan-name">standard plan</h3>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
            </div>
            <div className="plan-bottom">
              <h2>
                <span className="plan-amount">$9</span> / mo
              </h2>
              <button className="selectBtn">select</button>
            </div>
          </div>
          <div className="plan">
            <div className="plan-top">
              <div className="plan-img">
                <img src={premiumSVG} alt="premium plan" />
              </div>
              <h3 className="plan-name">premium plan</h3>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
              <p>
                <i class="fa-solid fa-check check"></i>
                Mauris sem neque
              </p>
            </div>
            <div className="plan-bottom">
              <h2>
                <span className="plan-amount">$12</span> / mo
              </h2>
              <button className="selectBtn">select</button>
            </div>
          </div>
        </div>
      </section>
      <section className="start-section">
        <h2>Get Started With Paddle Today</h2>
        <p>
          Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
          egestas ullamcorper
        </p>
        <button className="start-btn">start today</button>
        <div className="socials">
          <div className="social">
            <img src={netflixSVG} alt="" />
          </div>
          <div className="social">
            <img src={redditSVG} alt="" />
          </div>
          <div className="social">
            <img src={netflixSVG} alt="" />
          </div>
          <div className="social">
            <img src={discordSVG} alt="" />
          </div>
          <div className="social">
            <img src={spotifySVG} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
