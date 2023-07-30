import React from "react";

const RightSideBar = () => {
  return (
    <div className="side-bar-right d-none d-lg-block col-2 border">
      <div
        className="col-11 mx-auto my-2 p-4"
        style={{ backgroundColor: "#f3f2f2", borderRadius: "12.5%" }}
      >
        <div>
          <div
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            className="bg-dark text-light mx-auto border border-2 d-flex justify-content-center align-items-center fs-3"
          >
            M
          </div>
        </div>
        <div className="text-secondary text-center mt-4">
          {" "}
          <div>Margaret Norton</div>
          <div>7872603130</div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
