import React from "react";
import { Link } from "react-router-dom";
import sora from "../images/84770f_7df7023f44414ed6baa90326715a4cfa-mv2 .jpg";
import sora2 from "../images/84770f_8b58055267a2498ab2cba4b2386eb5f2-mv2 .jpg";
import sora3 from "../images/84770f_b0d1ca3c05e149bba7b5162140ff3356-mv2 .jpg";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <>
      <div className="container-Home  my-5">
        <div className="row">
          <div className="col-md-12 ">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img
                    
                    src={sora}
                    className="d-block w-100 allImag"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    
                    src={sora2}
                    className="d-block w-100  allImag"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    
                    src={sora3}
                    className="d-block w-100 allImag"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="caption-Home">
              <div className=" textHome-div">
                <p className="textHome">
                  New Outerwear <br /> Collection
                </p>
                <Link to="store">
                  <button className="btn Home-button">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselHome;
