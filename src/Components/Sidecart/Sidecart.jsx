import { motion } from "framer-motion";
import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/context";
const SideCart = () => {
  const {
    decrement,
    sideBar,
    setSideBar,
    addToSideCart,
    clickBtnStore,
    removeCart,
  } = useContext(ContainerContext);
  const totalPrice = addToSideCart.reduce((x, y) => x + y.qty * y.price, 0);
  return (
    <>
      <motion.div
        animate={{ x: sideBar ? -350 : 0 }}
        transition={{ duration: 1 }}
        className="side"
      >
        <div className=" position-relative texetSideCart  p-3 text-center ">
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

        <div className="mt-5 allSideCartbellowimg">
          {addToSideCart.map((elm, index) => (
            <div key={index} className="row m-1">
              <div className="col-md-6">
                <img
                  height={200}
                  className="w-100 my-2"
                  src={elm.images}
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
                    <span>{elm.qty}</span>
                    <button onClick={() => decrement(elm)} className="b-Cart">
                      -
                    </button>
                  </div>
                  <div className="trachCart">
                    <i
                      onClick={() => removeCart(elm)}
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
        <div className="foterSideCart">
          <h2>Subtotal</h2>
          <p className="fw-bold">${totalPrice.toFixed(2)}</p>

          <div className=" text-center">
            <Link to="/ViewCart">
              <button
                onClick={() => setSideBar(!sideBar)}
                className="btn btn-info w-75 "
              >
                View Cart
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideCart;
