import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/context";
import logo from "../images/logo.svg";
import "./Navbar.Modules.css";

const Navbar = () => {
  const { addToSideCart, sideBar, setSideBar } = useContext(ContainerContext);
  const countNavbar = addToSideCart.reduce((x, y) => (x += y.quantity), 0);

  return (
    <>
      <div className="NavContainer bg-danger">
        <nav className=" navbar navbar-expand-lg navbar-light">
          <div className="container  mb-2">
            <div className="logo-img ">
              <Link  to="/" className="navbar-brand ">
                <img className="w-25" src={logo} alt="" />
                <p className="logo">Giovanni Menswear</p>
              </Link>
            </div>

            <button
              className="navbar-toggler buttton"
              type="button"
              id="navbar-button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center ms-auto   ">
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="store">
                    Store
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>

                <li className="nav-item  mb-2 me-2">
                  <Link className="nav-link " to="login">
                    <span className="fa-2x  ">
                      <IoPersonCircleSharp to="login" />
                    </span>
                    Login
                  </Link>
                </li>

                {countNavbar < 100 ? (
                  countNavbar > 9 ? (
                    <li className="position-relative ">
                      <i className="upBS">
                        <BsBag
                          className="iconCart"
                          onClick={() => setSideBar(!sideBar)}
                        />
                      </i>
                      <span
                        onClick={() => setSideBar(!sideBar)}
                        className="badge UpZeroNav  fs-6"
                      >
                        {countNavbar}
                      </span>
                    </li>
                  ) : (
                    <li className="position-relative ">
                      <i className="fa-2x ">
                        <BsBag
                          className="iconCart"
                          onClick={() => setSideBar(!sideBar)}
                        />
                      </i>
                      <span
                        onClick={() => setSideBar(!sideBar)}
                        className="badge zeroNav fs-6"
                      >
                        {countNavbar}
                      </span>
                    </li>
                  )
                ) : (
                  <li className="position-relative ">
                    <i className="fa-3x ">
                      <BsBag
                        className="iconCart"
                        onClick={() => setSideBar(!sideBar)}
                      />
                    </i>
                    <span
                      onClick={() => setSideBar(!sideBar)}
                      className="badge moreThan99 fs-6"
                    >
                      {countNavbar}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
