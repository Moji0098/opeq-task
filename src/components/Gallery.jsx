import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Countdown from "react-countdown";

//style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icon
import {
  AccessAlarmOutlined,
  Timer,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";

const Gallery = ({ title = "", data = [] }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [indicator, setIndicator] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parent = useRef(null);

  useEffect(() => {
    //set parnet width for translate
    if (parent && parent.current) {
      setParentWidth(parent.current.offsetWidth);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      changeSlide();
    });
  });

  const changeSlide = (current) => {
    if (current === 0) {
      setIndicator(0);
    } else {
      if (windowWidth > 1024) {
        const dataLength = Math.floor((data?.length - 1) / 3);
        const currentSlide = Math.ceil(current / 3);
        let indicatorSituation = parentWidth * (currentSlide / dataLength);
        setIndicator(indicatorSituation);
      } else if (windowWidth > 600) {
        const dataLength = Math.floor((data?.length - 1) / 2);
        const currentSlide = Math.ceil(current / 2);
        let indicatorSituation = parentWidth * (currentSlide / dataLength);
        setIndicator(indicatorSituation);
      } else {
        let indicatorSituation = parentWidth * (current / (data.length - 1));
        setIndicator(indicatorSituation);
      }
    }
  };

  const settings = {
    dots: false,
    prevArrow: (
      <div>
        <div className="arrow-box-prev">
          <ChevronLeft className="carousel-icon" />
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="arrow-box-next">
          <ChevronRight className="carousel-icon" />
        </div>
      </div>
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 4000,
    autoplay: true,
    swipeToSlide: true,
    afterChange: changeSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: false,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="carousel-title">{title}</h2>
      <div className="parent" ref={parent}>
        <p
          className="child"
          style={{
            transform: `translateX(${indicator === 0 ? 0 : indicator - 30}px)`,
          }}
        ></p>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => {
          const {
            id,
            title,
            cat,
            image,
            desc1,
            desc2,
            desc3,
            time,
            price,
            delivery,
            date = "",
            happy = false,
          } = item;
          return (
            <div key={index} className="card">
              <div className="card-image-box">
                <a href={id}>
                  <img className="card-image" src={image} alt={id} />
                </a>
                {happy ? <span className="card-label">Happy Hour</span> : ""}
                {date ? (
                  <div className="card-timer-box">
                    <span className="card-timer">
                      <AccessAlarmOutlined
                        className="card-timer-icon"
                        size={10}
                      />
                      {"  "}
                      <Countdown date={date} />
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <a href="null" className="card-cat">
                  {cat}
                </a>
                <div className="card-desc-box">
                  <a href="null" className="card-desc-text">
                    {desc1}
                  </a>
                  <a href="null" className="card-desc-text">
                    {desc2}
                  </a>
                  <a href="null" className="card-desc-text">
                    {desc3}
                  </a>
                </div>
                <div className="card-footer">
                  <div className="card-time-price">
                    <div className="card-time-icon-box">
                      <Timer className="card-time-icon" />
                      <span className="card-time">{time}</span>
                    </div>
                    <span className="card-price">{price}</span>
                  </div>
                  <span className="card-delivery">{delivery}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { Gallery };
