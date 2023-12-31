import React from "react";
import CarouselHome from "../CarouselHome/CarouselHome";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OurTops from "../OurTops/OurTops";
import SecuredPayments from "../SecuredPayments/SecuredPayments";
import StoryNBlog from "../StoryNBlog/StoryNBlog";

const Home = () => {
  return (
    <>
        <CarouselHome />
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
