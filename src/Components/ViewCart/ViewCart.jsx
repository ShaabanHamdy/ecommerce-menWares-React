import React from "react";
import imag from "../images/84770f_b0d1ca3c05e149bba7b5162140ff3356-mv2 .jpg";

import "./ViewCart.css";
const ViewCart = () => {
  return (
    <>
      <div className="container viewContainer">
        <div className="row">
          <div className="col-md-6">
            <div className="CartImage d-flex">
              <div className="w-50">
                <img className="imageSubCategory" src={imag} alt="" />
                <img className="imageSubCategory" src={imag} alt="" />
                <img className="imageSubCategory" src={imag} alt="" />
                <img className="imageSubCategory" src={imag} alt="" />
              </div>
              <div className="w-100">
                <img className="imageCategories" src={imag} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" m-5 CartContent">
              <p>title</p>
              <p> before price</p>
              <p>price</p>
              <p>des</p>
              <p>saving</p>
            </div>
            <hr />
            <div className="my-3">
              <p className="me-2">Size : </p>
              <select
                className="form-select w-25 "
                aria-label="Default select example"
              >
                <option selected>Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="my-3 align-items-center d-flex">
              <div className="w-25">
                <p className="">Quantity </p>

                <input className="form-control" type="number" value="1" />
              </div>
              <div className="w-100">
                <button className=" ms-5 w-75 btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;
