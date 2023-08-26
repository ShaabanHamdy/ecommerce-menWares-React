import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ContainerContext } from "../context/context";
import "./store.css";

const Store = () => {
  const {  clickBtnStore, apiData } = useContext(ContainerContext);
  return (
    <>
      <div className="container-fluid  Story-Container">
        <h5 className=" text-center story-text my-5">All PRODUCTS</h5>
        <div className="row gy-3 g-x5  justify-content-center m-5">
          {apiData.map((product, index) => (
            <div key={index} className="col-md-3 Story-col ">
              <div className="story-card">
                <Card >               
                  <Link to={`/ViewCart/${product._id}/${product.title}`}>
                    <Card.Img
                    
                      height={300}
                      className="widthStoryImage"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = product.mainImage2)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = product.mainImage)
                      }
                      src={product.mainImage}
                    />
                    <div
                      className="quickView"
       
                    >
                      <p>View</p>
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title className="story-title">
                      {product.title}
                    </Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button
                      onClick={() => clickBtnStore(product)}
                      className="btnStory"
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
