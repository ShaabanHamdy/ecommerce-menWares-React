import React from "react";
import { Link } from "react-router-dom";
import secondImg from "../images/blog.jpg";
import firstImg from "../images/story.jpg";
import './StoryNBlog.css';
const StoryNBlog = () => {
  return (
    <>
      
    <div className="aboutContainer">
        <div className="row gy-3">
          <div className="col-md-6">
            <div className="first-img position-relative">
              <img className=" w-100" src={secondImg} alt="" />
              <Link className="StoryWord" to="/about">
                <h2 className="our-story">Our Story</h2>
              </Link>
            </div>
          </div>

          {/* ====================================================== */}
          <div className="col-md-6">
            <div className="second-img position-relative">
              <img className=" w-100" src={firstImg} alt="" />
             <Link className="StoryWord" to="/blog">
              <h2 className="our-blog">Our Blog</h2>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryNBlog;
