import React from "react";

const BoxContainer = () => {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "scroll" }}>
      <div style={{ width: "200px", height: "200px", background: "red" }} />
      <div style={{ width: "200px", height: "200px", background: "blue" }} />
      <div style={{ width: "200px", height: "200px", background: "green" }} />
      <div style={{ width: "200px", height: "200px", background: "yellow" }} />
    </div>
  );
};

export default BoxContainer;
