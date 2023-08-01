import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/context";
import logo from "../images/logo.svg";
import './Navbar.Modules.css';

const Navbar = () => {
  const { addToSideCart, sideBar, setSideBar } =
    useContext(ContainerContext);
 const  countNavbar = addToSideCart.reduce((x, y) => x + y.qty, 0);

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light">
        <div className="container  mb-2">
          <div className="logo-img ">
            <a className="navbar-brand ">
              <img className="w-25" src={logo} alt="" />
              <p className="logo">Giovanni Menswear</p>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            id="navbar-button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
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
                <Link
                  className="nav-link"
                  to="store"
                 
                >
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

              <li className="position-relative ">
                <i className="fa-3x ">
                  <BsBag
                    className="iconCart"
                    onClick={() => setSideBar(!sideBar)}
                  />
                </i>
                <span
                  onClick={() => setSideBar(!sideBar)}
                  className="badge zeroNav"
                >
                  {countNavbar}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
