import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsVerticalRounded, BiMessage } from "react-icons/bi";
import "./blog.css";
import img1 from "./images blog/9c608a_09eeecf05f094ef393d597f128345d08-mv2_d_5616_3744_s_4_.jpeg";
import img2 from "./images blog/9c608a_73a80edd1eb542c5868be1c0e538051b-mv2_d_5078_3519_s_4_.jpeg";
import img3 from "./images blog/9c608a_83dee5bbdeb340e1999bae1a9cb780ce-mv2_d_5184_3456_s_4_.jpeg";
import img4 from "./images blog/9c608a_83e689e9f9534afdb1a61fe53cac8cbc-mv2_d_5400_3807_s_4_.jpeg";
import img5 from "./images blog/9c608a_b2433041ccaf4e2abe92148a32c53088-mv2_d_1875_1500_s_2.jpeg";
import img6 from "./images blog/9c608a_d90e57d1e9c74ac6aca04a7a3b72c505-mv2_d_4000_3865_s_4_.jpeg";

const Blog = () => {
  return (
    <>
      <div className="container containerBlog">
        <div className="row containerBlog gy-5">
          <h3 className=" text-center mb-3  story-text">All Posts</h3>
          <div className="col-md-4 DEV-COL   ">
            <div className="m-2 containerBlog parent-blog  ">
              <Card className=" cardBlog">
                <Card.Img className="" src={img6} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small"> . 1 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    Finding Jeans That Truly Fit
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">0</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">5</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix mb-5"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 DEV-COL " >
            <div className="m-2 parent-blog ">
              <Card className="cardBlog">
                <Card.Img src={img4} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small"> . 2 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    Style Essentials Every Man Needs{" "}
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">2</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">4</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 DEV-COL" blogCol>
            <div className="m-2 parent-blog ">
              <Card className="cardBlog">
                <Card.Img src={img3} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small"> . 1 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    Giovanni's Ultimate Guide to Hoodies
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">5</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">15</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 DEV-COL" blogCol>
            <div className="m-2 parent-blog ">
              <Card className="cardBlog">
                <Card.Img src={img2} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small"> . 1 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    City Survival: Bar Dress Code Guide
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">3</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">4</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 DEV-COL" blogCol>
            <div className="m-2 parent-blog ">
              <Card className="cardBlog">
                <Card.Img src={img5} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small"> . 5 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    The Best Men's Accessories to Buy This Winter{" "}
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">0</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">9</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4 DEV-COL " >
            <div className="m-2 parent-blog ">
              <Card className="cardBlog">
                <Card.Img src={img1} />
                <Card.Body>
                  <div className="m-2 py-2">
                    <div className=" float-start">
                      <span className="small">May 16</span>
                      <span className="small">.19 min</span>
                    </div>
                    <div className=" float-end">
                      <BiDotsVerticalRounded />{" "}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <Card.Title className=" text-title">
                    Hot Menswear Trends for the Following Season{" "}
                  </Card.Title>
                  <hr />
                  <div className=" float-start">
                    <span className="small">7</span>

                    <BiMessage size={20} />
                  </div>
                  <div className="float-end ">
                    <span className="small">6</span>
                    <AiOutlineHeart
                      // onClick={()=>onHeart()}
                      size={20}
                      color="red"
                    />
                    {/* {heart ? "background-color:red"  : "background-color:white"          } */}
                  </div>
                  <div className="clearfix"></div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
