import React from "react";

const Search = () => {
  return (
    <div className="search-box ">
      <div className="search container">
        <div className="search-left">
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

export { Search };
