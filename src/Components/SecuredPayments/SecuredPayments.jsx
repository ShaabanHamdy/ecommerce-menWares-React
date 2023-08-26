import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { IoUmbrellaOutline } from "react-icons/io5";

import './securedPayments.css';

const SecuredPayments = () => {
  return (
    <>
      <div className="container-fluid my-5 secured-container">
        <div className="row d-flex justify-content-center align-items-center text-center h-100 ">
          <div className="col-md-4">
            <BsArrowRepeat className="fa-3x my-4 securedIcons" />
            <p>Free Shipping and Returns</p>
          </div>
          <div className="col-md-4">
            <CiLock className="fa-3x my-4 securedIcons" />
            <p>Secured Payments</p>
          </div>
          <div className="col-md-4">
            <IoUmbrellaOutline className="fa-3x my-4 securedIcons" />
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuredPayments;
