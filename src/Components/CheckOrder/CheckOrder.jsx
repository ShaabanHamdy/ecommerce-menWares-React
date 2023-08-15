import React, { useContext } from "react";
import { ContainerContext } from "../context/context";
import './CheckOrder.css'
const CheckOrder = () => {
  const {
    decrement,
    addToSideCart,
    clickBtnStore,
    removeCart,
  } = useContext(ContainerContext);
  const totalPrice = addToSideCart.reduce((x, y) => x + y.qty * y.price, 0);

  return (
    <>
      <div className="CheckOrder">
        <div className="mt-5 allSideCartbellowimg">
          <div className="container">
            <div className="row ">
              {addToSideCart.map((elm, index) => (
                <>
                  <hr />

                  <div key={index} className="col-md-4">
                    <img
                      height={150}
                      className="w-25 my-2"
                      src={elm.images}
                      alt=""
                    />
                    <span className="mx-5 titleCheckOrder">{elm.title}</span>
                  </div>

                  <div className="col-md-4">
                    <div className="bothTrashNum">
                      <div className="divBtnCart">
                          <button    onClick={() => clickBtnStore(elm)} 
                             className="b-Cart"  >    +  </button>
                        <span>{elm.qty}</span>
                        <button   onClick={() => decrement(elm)}   className="b-Cart" >   - </button>
                      </div>
                      <div className="mx-5  text-danger">
                        <i
                          onClick={() => removeCart(elm)}
                          className="fas fa-trash-can"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4  d-flex align-items-center">
                    <div className=" m-auto">
                      <p className="">${elm.price}</p>
                    </div>
                  </div>
                </>
              ))}
              <hr />
            </div>
          </div>
        </div>
        {/* ======================================== */}
        <div className="foterSideCart float-end me-5 pe-5">
          <div className="me-5 pe-5 dddd">
            <h2 className="totalPrice">Subtotal</h2>
            <p className="fw-bold totalPrice">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="clearfix"></div>
        <hr />
      </div>
    </>
  );
};

export default CheckOrder;
