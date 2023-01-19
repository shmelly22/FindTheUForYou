import React from "react";
import AOS from "aos";

function StartBottom() {
  AOS.init();

  return (
    <div id="S-BottomContainer">
      <div className="S-Bottom-Section1">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus
          gravida commodo. Vivamus nec metus non orci venenatis consequat eget
          at orci. Integer in elit posuere, consequat turpis sit amet, iaculis
          leo. Pellentesque at laoreet metus, in elementum ante. Ut leo arcu,
          eleifend quis nunc eget, gravida congue felis.{" "}
        </p>
      </div>
      <div className="S-Bottom-Section2">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus
          gravida commodo. Vivamus nec metus non orci venenatis consequat eget
          at orci. Integer in elit posuere, consequat turpis sit amet, iaculis
          leo. Pellentesque at laoreet metus, in elementum ante. Ut leo arcu,
          eleifend quis nunc eget, gravida congue felis.
        </p>{" "}
      </div>
      <div className="S-Bottom-Section3">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus
          gravida commodo. Vivamus nec metus non orci venenatis consequat eget
          at orci. Integer in elit posuere, consequat turpis sit amet, iaculis
          leo. Pellentesque at laoreet metus, in elementum ante. Ut leo arcu,
          eleifend quis nunc eget, gravida congue felis.{" "}
        </p>{" "}
      </div>
      <div className="S-Bottom-Section4">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus
          gravida commodo. Vivamus nec metus non orci venenatis consequat eget
          at orci. Integer in elit posuere, consequat turpis sit amet, iaculis
          leo. Pellentesque at laoreet metus, in elementum ante. Ut leo arcu,
          eleifend quis nunc eget, gravida congue felis.{" "}
        </p>{" "}
      </div>
    </div>
  );
}

export default StartBottom;
