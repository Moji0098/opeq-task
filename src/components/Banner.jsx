import React from "react";

//images
import banner from "../assets/imgs/banner.jpg";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="banner-image-box">
        <img src={banner} alt="banner" />
      </div>
      <div className="container fix-text-box">
        <div className="fix-text">
          <div className="banner-texts">
            <h1 className="banner-title">Happy Hour</h1>
            <p className="banner-subtitle">
              Get Unlimited %40 Off on Egg Burger with Trufle Mayo
            </p>
          </div>
          <button className="happy-btn">
            Use <span className="happy">Happy Hour</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Banner };
