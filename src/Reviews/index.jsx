import React, { useEffect, useRef, useState } from "react";
import "./Reviews.css";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import starSVG from "../assets/starSVG.svg";

const Reviews = () => {
  const sliderRef = useRef();
  const [counter, setCounter] = useState(0);
  const [scroller, setScroller] = useState(0);
  const scrollValue = () => {
    const value = Math.floor(sliderRef.current.scrollLeft);
    setScroller(value);
  };
  const handleNext = () => {
    if (counter < 5) {
      setCounter(scroller / 450);
      setCounter((counter) => Math.ceil(counter) + 1);
    }
  };
  const handlePrev = () => {
    if (counter > 0) {
      setCounter(scroller / 450);
      setCounter((counter) => Math.ceil(counter) - 1);
    }
  };
  useEffect(() => {
    console.log(counter);
    sliderRef.current.scrollTo(counter * 450, 0);
  }, [counter]);
  const review = [
    {
      id: 1,
      image: profile1,
      location: "Warsaw, Poland",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, provident accusantium amet cumque illo voluptatem iste molestias ea excepturi repellendus dolor tenetur earum.",
      stars: "4.5",
      name: "Viezh Robert",
    },
    {
      id: 2,
      image: profile2,
      location: "Shanxi, China",
      text: "“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”",
      stars: "4.8",
      name: "Yessica Christy",
    },
    {
      id: 3,
      image: profile3,
      location: "Seoul, South Korea",
      text: "Wolor, sit amet consectetur adipisicing elit. Asperiores harum ut cupiditate explicabo ad. Dolorem hic consectetur et ipsam neque saepe ipsa voluptas deserunt soluta.",
      stars: "4.7",
      name: "Kim Young Jou",
    },
    {
      id: 4,
      image: profile1,
      location: "Lagos, Nigeria",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, provident accusantium amet cumque illo voluptatem iste molestias ea excepturi repellendus dolor tenetur earum.",
      stars: "5.0",
      name: "Jargo Hillzz",
    },
    {
      id: 5,
      image: profile3,
      location: "Helsinki, Finland",
      text: "Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex.",
      stars: "4.5",
      name: "Roberto Finsh",
    },
  ];
  return (
    <div className="review-section">
      <h2>Trusted by Thousands of Happy Customer</h2>
      <p>
        Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et
        suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.{" "}
      </p>
      <div className="reviews">
        <div className="reviews-card" ref={sliderRef} onScroll={scrollValue}>
          {review.map((rev) => {
            const { id, image, location, text, stars, name } = rev;
            return (
              <div className="review-card" key={id}>
                <div className="review-top">
                  <div className="review-info">
                    <div className="review-img">
                      <img src={image} alt="a person" />
                    </div>
                    <div className="review-name">
                      <h3>{name}</h3>
                      <h4>{location}</h4>
                    </div>
                  </div>
                  <div className="review-rating">
                    <p>{stars}</p>
                    <img src={starSVG} alt="star" />
                  </div>
                </div>
                <p className="review-text">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="reviews-toggle">
          <div className="reviews-prev" onClick={handlePrev}>
            <i class="fa-solid fa-arrow-left review-arrow"></i>
          </div>
          <div className="reviews-next" onClick={handleNext}>
            <i class="fa-solid fa-arrow-right review-arrow"></i>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="subs-text">
          <h2>Subscribe Now for Get Special Features!</h2>
          <p>Praesent mollis lobortis nisl nec laoreet.</p>
        </div>
        <div className="subs-btn">
          <button className="start-btn">subscribe now</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
