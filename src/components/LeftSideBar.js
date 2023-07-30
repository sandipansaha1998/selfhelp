import React from "react";
import src from "../assets/brand.png";
import HomeIcon from "@mui/icons-material/Home";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const LeftSideBar = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="side-bar-left  d-none d-lg-flex col-2 border-end border-2  flex-column  "
    >
      <div className="brand pb-5">
        {" "}
        <img src={src} alt="" className="col-10" />
      </div>
      <div
        className="d-flex flex-column align-items-center gap-4 fs-5
"
      >
        <div className="d-flex gap-3  ">
          <HomeIcon fontSize="large" />
          Home
        </div>
        <div className="d-flex gap-3 ">
          <VaccinesIcon fontSize="large" /> Medication
        </div>
      </div>
      <div className=" text-center mt-auto  mb-5 ">
        <RemoveCircleIcon fontSize="large" /> Logout
      </div>
    </div>
  );
};

export default LeftSideBar;
