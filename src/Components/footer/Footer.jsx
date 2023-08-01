import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container footer-container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="liftUl">
              <ul className=" list-unstyled">
                <li className="foterPages">
                  <Link className="foterPages" to="/">
                    Home
                  </Link>
                </li>
                <li className="foterPages">
                  <Link className="foterPages" to="/store">
                    Store
                  </Link>
                </li>
                <li className="foterPages">
                  <Link className="foterPages" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="foterPages">
                  <Link className="foterPages" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="liftUl">
              <ul className=" list-unstyled">
                <li> 500 Terry Francois St.</li>
                <li>San Francisco, CA 94158</li>
                <br />
                <li>Email : info@my-domain.com</li>
                <li>Tel : 1-800-000-0000</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="liftUl">
              <ul className=" list-unstyled">
                <li> Shipping & Returns</li>
                <li>FAQ</li>
                <br />
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter mx-3"></i>
                <i className="fab fa-instagram"></i>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="liftUl">
              <form>
                <label>Receive all our news and updates</label>
                <input
                  className=" form-control "
                  type="text"
                  placeholder="Email Adress"
                />
                <div className="text-center">
                  {" "}
                  <button className="btn Btnfotter my-3 w-100">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className=" smallDiv">
            <small className="pt-5">
              ©2035 by Giovanni Menswear. Powered and secured by Wix
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
