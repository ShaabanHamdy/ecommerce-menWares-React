import React from "react";
import ourShoes from "../images/OurShoes.png";
import OurBag from "../images/OurBag.png";
import OurPerson from "../images/OurPerson.png";
import './ourTops.css'



const OurTops = () => {
  return (
    <>
      <div className="container-fluid my-5 OurContainer">

          <h2 className="text-center feature-texet my-5 p-3">Categories</h2>
        <div className="row gy-5 text-center">
          <div className="col-md-4">
            <div className="ourTops">
              <img className="w-100 topsImages" src={ourShoes} alt="" />
              <div className="overLayer">SHOES</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ourTops">
              <img className="w-100 topsImages " src={OurBag} alt="" />
              <div className="overLayer">ACCESSORIES</div>
            </div>
          </div>
          <div className="col-md-4 mb-2 ">
            <div className="ourTops">
              <img className="w-100 topsImages " src={OurPerson} alt="" />
              <div className="overLayer">TOPS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTops;
