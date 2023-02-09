import React from "react";
import DropTarget from "./DropTarget";

export default () => {
  const [items, setItems] = React.useState([]);

  const itemDropped = (item) => setItems([...items, item]);
  console.log(items);
  return (
    <DropTarget onItemDropped={itemDropped} dropEffect="link">
      <div className="tier Reach">
        <div className="tierLabel"> Reach</div>
        {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </DropTarget>
  );
};
