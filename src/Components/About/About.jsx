import React from "react";

import './About.css';
const About = () => {
  return (
    <>
    <div className="marginTopAbout">
      <div className="container-fluid">
        <div className="row rowAbout">
          <div className="col-md-6 p-5 divParagraph d-flex justify-content-center align-items-center">
            <div className="colParagraph">
              <p className="paragraphAbout ">
                The Story of Giovanni Menswear
                <br /> <br />
                <br />
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font. Feel free to
                drag and drop me anywhere you like on your page. I’m a great
                place for you to tell a story and let your users know a little
                more about you.
                <br /> <br />
                This is a great space to write long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out
                and show your visitors who you are.
              </p>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="ColImg">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;
