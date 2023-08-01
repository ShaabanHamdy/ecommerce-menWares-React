import React from "react";
import Courselhome from "../CarouselHome/CarouselHome";

import StoryNBlog from "../StoryNBlog/StoryNBlog";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OurTops from "../OurTops/OurTops";
import SecuredPayments from "../SecuredPayments/SecuredPayments";

const Home = () => {
  return (
    <>
        <Courselhome />
      <div className="my-5">
        <StoryNBlog />
      </div>
      {/* ================================================================= */}
      {/* ============================================================================== */}
      <div className="">
        <FeaturedProducts />
      </div>
      {/* ================================================= */}
      <div className="">
        <OurTops />
      </div>

      {/* ================================== */}
      <SecuredPayments />
    </>
  );
};

export default Home;
