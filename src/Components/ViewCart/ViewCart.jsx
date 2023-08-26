import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContainerContext } from "../context/context";
import "./ViewCart.css";

const ViewCart = () => {
  let prams = useParams();
  const { val, setVal,clickBtnViewCart, toViewCart, viewCart } = useContext(ContainerContext);
  
  useEffect(() => {
    viewCart(prams);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container min-vh-100  viewContainer">
        <div className="row m-5">
          <div className="col-md-5 viewCol">
            <div className="CartImage  text-center">
              <div className="">
                <img
                  className="imageViewCart w-100"
                  src={toViewCart?.mainImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 viewCol">
            <div className=" m-3 CartContent">
              <p>{toViewCart?.title}</p>
              <p> {toViewCart?.description}</p>
              <p>${toViewCart?.price}</p>
            </div>
            <hr />
            <div className="my-3 w-100">
              <p className="me-2">Size </p>
              <select
                className="form-select  widthSelectAndQnt"
                aria-label="Default select example"
              >
                <option value={"select"}>select</option>
                <option value="1">{toViewCart?.size[0]}</option>
                <option value="2">{toViewCart?.size[1]}</option>
              </select>
            </div>

            <div className="my-3 align-items-center ">
              <div className=" widthSelectAndQnt">
                <p className="">Quantity </p>
                <input
                  max={99}
                  min={1}
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  className="  form-control"
                  type="number"
                  placeholder="1"
                />
              </div>
              {val > 99 ?
                <div className="mt-3 text-danger"> cant add more than 99 items </div>
              :""
              } 
              {/* ==================== */}

              <hr />
              <div className=" text-center   w-100">
                <button
                  onClick={()=> clickBtnViewCart(toViewCart)}
                  className="  w-75 btn btn-info btnColor"
                >
                  Add to cart
                </button>
              
                
              </div>
            </div>
            <Link to="/CheckOrder">
            <div className="  text-center  w-100">
             
              <button className=" my-3 w-75 btn btn-dark">Buy Now</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCart;
