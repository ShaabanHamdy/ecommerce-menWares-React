import { motion } from "framer-motion";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/context";
import "./SideCart.css";
import Swal from "sweetalert2";
const SideCart = () => {
  const {
    decrement,
    sideBar,
    setSideBar,
    addToSideCart,
    clickBtnStore,
    removeCart,
  } = useContext(ContainerContext);
  const deleteAlert = (elm)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        removeCart(elm)
      }
    })
  }
  
  const totalPrice = addToSideCart.reduce(
    (x, y) => x + y.quantity * y.price,
    0
  );
  return (
    <>
      <motion.div
        animate={{ x: sideBar ? -350 : 0 }}
        transition={{ duration: 1 }}
        className="side"
      >
        <div className=" position-relative textSideCart  p-3 text-center ">
          {sideBar ? (
            <span className="sahmIcon">
              <IoIosArrowForward onClick={() => setSideBar(!sideBar)} />{" "}
            </span>
          ) : (
            <span className="sahmIcon">
              <IoIosArrowBack onClick={() => setSideBar(!sideBar)} />{" "}
            </span>
          )}
          <span className="fs-2">Cart</span>
        </div>

        {/* ============================= */}

        <div className="mt-5">
          {addToSideCart.map((elm, index) => (
            <div key={index} className="row m-1">
              <div className="col-md-6">
                <img
                  height={200}
                  className="w-100 my-2"
                  src={elm.mainImage}
                  alt=""
                />
              </div>

              <div className="col-md-6">
                <div>
                  <p className="mx-1">{elm.title}</p>
                  <p className="mx-1">${elm.price}</p>
                  <div className="divBtnCart">
                    <button
                      onClick={() => clickBtnStore(elm)}
                      className="b-Cart"
                    >
                      +
                    </button>
                    <span>{elm.quantity}</span>
                    <button onClick={() => decrement(elm)} className="b-Cart">
                      -
                    </button>
                  </div>
                  <div className="trachCart w-100 text-center my-5">
                    <i
                      onClick={() => deleteAlert(elm)}
                      // onClick={() => removeCart(elm)}
                      className="fas fa-trash-can"
                    ></i>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        {/* ======================================== */}
        <div className="footerSideCart">
          <h2>Subtotal</h2>
          <p className="fw-bold">${totalPrice.toFixed(2)}</p>

          <div className=" text-center">
            <Link to="/CheckOrder">
              <button
                onClick={() => setSideBar(!sideBar)}
                className="btn btn-info w-75 "
              >
                Check Order
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideCart;
