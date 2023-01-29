import React, { useState, useRef } from "react";
import StartHeader from "./StartHeader";
import { dragdropcontext } from "react-beautiful-dnd";
import { reorderColors } from "./reorder";
import { ColorMap } from "./types";
import { AuthorList } from "./AuthorList";

function Homepage() {
  const [colors, setColors] = useState({
    a: ["blue", "red"],
    b: ["pink"],
    c: ["green"],
  });

  return (
    <>
      <StartHeader />
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          // // dropped outside the list
          if (!destination) {
            return;
          }

          setColors(reorderColors(colorMap, source, destination));
        }}
      >
        <div>
          {Object.entries(colors).map(([k, v]) => (
            <AuthorList
              internalScroll
              key={k}
              listId={k}
              listType="CARD"
              colors={v}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  );
}

export default Homepage;
