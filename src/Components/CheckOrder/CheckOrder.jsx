import React, { useContext } from "react";
import { ContainerContext } from "../context/context";
import "./CheckOrder.css";
import Swal from "sweetalert2";
const CheckOrder = () => {
  const { decrement, addToSideCart, clickBtnStore, removeCart } =
    useContext(ContainerContext);
  const totalPrice = addToSideCart.reduce(
    (x, y) => x + y.quantity * y.price,
    0
  );
  const deleteAlert = (elm) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        removeCart(elm);
      }
    });
  };
  return (
    <div className="container ">
      <div className="row orderRow    ">
        {addToSideCart.map((elm) => (
          <div key={elm._id}>
            <hr />
            <div className=" float-end">
              <i
                onClick={() => deleteAlert(elm)}
                className="fas fa-xmark small border border-1"
              ></i>
            </div>
            <div className="clearfix"></div>

            <div className="col-md-12  allCol">
              <div>
                <img
                  height={250}
                  className="w-100 CheckOrderImg"
                  src={elm.mainImage}
                  alt=""
                />
              </div>
              <div className="titleCheck">{elm.title}</div>

              <div className="priceCol">
                <div className=" m-auto">
                  <p className="">${elm.price}</p>
                </div>
              </div>

              <div className="decInCol">
                <div className="">
                  <div className="divBtnCart">
                    <button
                      onClick={() => clickBtnStore(elm)}
                      className="b-Cart"
                    >
                      {" "}
                      +{" "}
                    </button>
                    <span>{elm.quantity}</span>
                    <button onClick={() => decrement(elm)} className="b-Cart">
                      {" "}
                      -{" "}
                    </button>
                  </div>
                  {/* <div className="  bg-secondary mt-3 text-danger">
                    <i
                      onClick={() => removeCart(elm)}
                      className="fas fa-trash-can"
                    ></i>
                  </div> */}
                </div>
              </div>

              <div className=" numPrice">
                <div>${elm.price * elm.quantity}</div>
              </div>
            </div>
          </div>
        ))}

        <hr />
        <div className="">
          <div className="float-end">
            <h2 className="totalPrice">Subtotal</h2>
            <p className="fw-bold totalPrice">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="clearfix"></div>
          <div className="text-center">
            <h2 className="btn btn-info">Check Order</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
