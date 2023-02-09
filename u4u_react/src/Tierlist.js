import React from "react";
import DragList from "./DragList";
import Reach from "./Reach";
import Mid from "./Mid";
import Safety from "./Safety";
import Undecided from "./Undecided";

function Tierlist() {
  return (
    // <div>
    //   <div className="tierlist">
    //     <div className="tier Reach">Reach</div>
    //     <div className="collegeSpace"></div>
    //     <div className="tier Mid" contentEditable="true">
    //       Mid
    //     </div>
    //     <div className="collegeSpace"></div>
    //     <div className="tier Safety" contentEditable="true">
    //       Safety
    //     </div>
    //     <div className="collegeSpace"></div>
    //     <div className="tier Undecided" contentEditable="true">
    //       Undecided
    //     </div>
    //     <div className="collegeSpace"></div>
    //   </div>
    // </div>
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-6">
          <Reach />
        </div>
        <div className="col-6">
          <Mid />
        </div>
        <div className="col-6">
          <Safety />
        </div>
        <div className="col-6">
          <Undecided />
        </div>
        <div className="col-6">
          <DragList />
        </div>
      </div>
    </div>
  );
}

export default Tierlist;
