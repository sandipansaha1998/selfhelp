import React, { useState } from "react";
import Vitals from "./Vitals";
import Button from "@mui/material/Button";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import FormModal from "../components/FormModal";

const MidSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedVital, setUpdatedVital] = useState("");
  return (
    <div className="col-10 col-lg-7 mx-auto">
      {console.log(updatedVital)}
      <div className="header text-center">
        <h2 className="text-start">Hello Margaret</h2>
        <h5 className="text-start text-secondary">
          Track you health status!!{" "}
        </h5>
        <Button
          className="col-10 d-md-none my-2"
          variant="contained"
          onClick={handleShow}
        >
          Add
          <AddCircleOutlineOutlined className="mx-2" />
        </Button>
        <div className="text-end">
          <Button
            className="r d-none d-md-block col-10 col-md-2  my-3 ms-auto bg-dark"
            variant="contained"
            onClick={handleShow}
          >
            Add
            <AddCircleOutlineOutlined className="mx-2" />
          </Button>
        </div>

        <Vitals updatedVital={updatedVital} />
      </div>
      <div className="card"></div>
      <FormModal
        show={show}
        handleClose={handleClose}
        setUpdatedVital={setUpdatedVital}
      />
    </div>
  );
};

export default MidSection;
