import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import SelectInput from "./SelectInput";
import { addVital } from "../api";
import { notify } from "./Notification";

const FormModal = ({ show, handleClose, setUpdatedVital }) => {
  const vitalTypes = {
    Sugar: "mg/dL",
    SPO2: "%",
    Systolic: "mmHg",
    Diastolic: "mmHg",
  };
  const initialState = {
    type: "Sugar",
    value: "",
    date: "",
  };
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [currentVital, setCurrentVital] = useState("Sugar");

  const handleChange = (e) => {
    if (!e) return;
    // Time
    if (!e.target) {
      console.log(e._d.toUTCString());
      setFormData({ ...formData, date: e._d.toUTCString() });
    } else {
      if (e.target.name === "type") {
        setCurrentVital(e.target.value);
      }
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleAddVital = async () => {
    // Validating form data
    if (!/^\d+(\.\d+)?$/.test(formData.value)) {
      return notify().error("Enter only numeric vital values");
    }
    if (formData.date === "" || formData.date === "Invalid Date") {
      return notify().error("Enter Valid Date");
    }
    setLoading(true);
    const response = await addVital(formData);
    // Notify
    if (response.success) {
      setUpdatedVital(currentVital);
      notify().success("Record Added");
      handleClose();
    } else {
      notify().error("Failed");
    }
    setLoading(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update vital</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Select Vital type */}
        <SelectInput
          label={"Type"}
          options={Object.keys(vitalTypes)}
          handleChange={handleChange}
          helperText={"Please Choose Vital Type"}
          name={"type"}
          value={currentVital}
        />
        {/* Value of the vital */}
        <FormControl className="ms-4" variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                {vitalTypes[currentVital]}
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            onChange={handleChange}
            name="value"
          />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateField name="date" onChange={handleChange} />
        </LocalizationProvider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleAddVital}
          disabled={isLoading && true}
        >
          {isLoading ? "Adding..." : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
