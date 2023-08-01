import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Products from "../Api";
import { ContainerContext } from "../context/context";
import './Store';
const Store = () => {
  const { clickBtnStore } = useContext(ContainerContext);
  return (
    <>
      <div className="container-fluid p-5 mt-5 Featured-Container">
        <h5 className=" text-center feature-texet">FEATURED PRODUCTS</h5>
        <div className="row gy-3 g-x5 p-5 justify-content-center">
          {Products.map((product, index) => (
            <div key={index} className="col-md-4 Featured-col m-2 ">
              <div className="card cadrStore">
                <Card>
                <Link to='/ViewCart'>
                  <Card.Img
                    height={300}
                    onMouseOver={(e) => (e.currentTarget.src = product.image1)}
                    onMouseOut={(e) => (e.currentTarget.src = product.images)}
                    src={product.images}
                  />
                  <div className="quickView">
                    <p>View</p>
                  </div>
                  </Link>
                  <Card.Body>
                    <Card.Title className="mx-height-Store">
                      {product.title}
                    </Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button
                      onClick={() => clickBtnStore(product)}
                      className="btnFEATURED"
                    >
                      Add to Card
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;

