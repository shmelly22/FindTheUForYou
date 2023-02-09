import React, { useState } from "react";

function Test() {
  const [style, setStyle] = useState({
    border: "solid 1px black",
  });

  const handleHover = () => {
    setStyle({
      border: "solid 1px white",
    });
  };
  const handleMouseOut = () => {
    setStyle({
      border: "solid 1px black",
    });
  };

  return (
    <div>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        style={style.div1}
      ></div>
      <div style={style.div2}></div>
    </div>
  );
}

export default Test;
