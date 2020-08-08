import React from "react";

// image
import footer from "../assets/imgs/footer.svg";

//icon
import { Facebook, Twitter, Instagram, YouTube } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer-box ">
      <div className="footer-parent">
        <div className="footer-img-box">
          <img className="footer-img" src={footer} alt="footer" />
        </div>
        <div className="footer">
          <div className="footer-links">
            <a className="footer-link" href="null">
              About
            </a>
            <a className="footer-link" href="null">
              Services
            </a>
            <a className="footer-link" href="null">
              Support
            </a>
            <a className="footer-link" href="null">
              Gallery
            </a>
            <a className="footer-link" href="null">
              Terms
            </a>
            <a className="footer-link" href="null">
              Locations
            </a>
          </div>
          <div className="footer-links-group-box">
            <div className="footer-links-left">
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">Main Menu</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Pickup
                  </a>
                  <a className="footer-link2" href="null">
                    Delivery
                  </a>
                </div>
              </div>
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">Orders</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Upcoming Orders
                  </a>
                  <a className="footer-link2" href="null">
                    Recent Orders
                  </a>
                </div>
              </div>
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">Reservation</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Recent Reservation
                  </a>
                  <a className="footer-link2" href="null">
                    Wait To Be Seated
                  </a>
                </div>
              </div>
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">Profile</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Promos &amp; Credits
                  </a>
                  <a className="footer-link2" href="null">
                    Rewards
                  </a>
                </div>
              </div>
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">Support</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Contact Us
                  </a>
                  <a className="footer-link2" href="null">
                    Live Chat
                  </a>
                </div>
              </div>
              <div className="footer-links-left-boxes">
                <div className="footer-links-left-header">FREE FOOD</div>
                <div className="footer-links-left-body">
                  <a className="footer-link2" href="null">
                    Get $20.00 credit for your next order.
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-links-right">
              <div className="footer-links-right-header">Special Offers</div>
              <div className="footer-links-right-body">
                <a className="footer-link2" href="null">
                  Happy Hour (Egg Burger with Truffle Mayo)
                </a>
                <a className="footer-link2" href="null">
                  Happy Hour (California Chicken Salad)
                </a>
                <a className="footer-link2" href="null">
                  Happy Hour (Pad Thai)
                </a>
                <a className="footer-link2" href="null">
                  Happy Hour (Quarter Dark and Leg)
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-description">
              <div className="footer-bottom-title">
                Delight customers everywhere with a branded custom-built native
                iOS, native Android and Installable Website Application.
              </div>
              <div className="footer-bottom-text">
                Opeqe is reliable, fast and commission free all-in-one ordering
                solutions for multi-location or single location restaurants.
              </div>
            </div>
            <div className="footer-social-terms">
              <div className="footer-social-terms-links">
                <span className="copy-right">©2019 OPEQE INC</span>|
                <a className="terms footer-link2" href="null">
                  Terms &amp; Conditions
                </a>
                |
                <a className="terms footer-link2" href="null">
                  Privacy Policy
                </a>
              </div>
              <div className="social">
                <a className="social-box" href="https://facebook.com/opeqe">
                  <Facebook className="social-icon" />
                </a>
                <a className="social-box" href="https://twitter.com/opeqeinc">
                  <Twitter className="social-icon" />
                </a>
                <a
                  className="social-box"
                  href="https://instagram.com/opeqeinc/"
                >
                  <Instagram className="social-icon" />
                </a>
                <a className="social-box" href="https://youtube.com/opeqe">
                  <YouTube className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
