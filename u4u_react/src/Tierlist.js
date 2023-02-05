import React from "react";

function Tierlist() {
  const [colors, setColors] = React.useState({
    a: ["blue", "red"],
    b: ["pink"],
    c: ["green"],
  });

  return (
    <div>
      <div className="tierlist">
        <div className="tier Reach">Reach</div>
        <div className="collegeSpace"></div>
        <div className="tier Mid" contentEditable="true">
          Mid
        </div>
        <div className="collegeSpace"></div>
        <div className="tier Safety" contentEditable="true">
          Safety
        </div>
        <div className="collegeSpace"></div>
        <div className="tier Undecided" contentEditable="true">
          Undecided
        </div>
        <div className="collegeSpace"></div>
      </div>
    </div>
  );
}

export default Tierlist;
