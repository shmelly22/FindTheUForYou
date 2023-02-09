import React from "react";
import Drag from "./Drag";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

export default () => {
  return (
    <div className="dragList">
      {items.map((item) => (
        <Drag key={item} dataItem={item} dropEffect="link">
          <div className="item">{item}</div>
        </Drag>
      ))}
    </div>
  );
};
