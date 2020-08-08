import React from "react";

const Ready = () => {
  return (
    <div className="ready-box ">
      <div className="ready container">
        <div className="ready-top">
          <h1 className="ready-title">Ready to order?</h1>
          <div className="ready-desc">
            Browse our menu for dine-in, delivery or pickup and catering
          </div>
        </div>
        <div className="ready-bottom">
          <div className="asap-box">
            <div className="asap-title">ASAP Pickup</div>
            <div className="asap-text">
              Opeqe San Francisco - 235 Montgomery Street
            </div>
          </div>
          <div className="delivery-pickup">
            <div className="change">Change</div>
            <div className="receive-box">
              <div className="receive">Delivery </div>
              <div className="asap-text"> or </div>
              <div className="receive receive-active ">Pickup </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Ready };
