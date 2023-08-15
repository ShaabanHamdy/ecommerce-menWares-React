import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../FeaturedProducts/FeaturedProducts"
import { ContainerContext } from "../context/context";
const Store = () => {
  const { clickBtnStore ,apiData} = useContext(ContainerContext);
  return (
    <>
      <div className="container-fluid p-5 mt-5 Featured-Container">
        <h5 className=" text-center feature-text">All PRODUCTS</h5>
        <div className="row gy-3 g-x5 p-5 justify-content-center">
          {apiData.map((product, index) => (
            <div key={index} className="col-md-3 Featured-col ">
              <div className="card cardStore">
                <Card>
                <Link to='/ViewCart'>
                  <Card.Img
                    height={300}
                    onMouseOver={(e) => (e.currentTarget.src = product.mainImage2)}
                    onMouseOut={(e) => (e.currentTarget.src = product.mainImage)}
                    src={product.mainImage}
                  />
                  <div className="quickView">
                    <p>View</p>
                  </div>
                  </Link>
                  <Card.Body>
                    <Card.Title className="features-title">
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

