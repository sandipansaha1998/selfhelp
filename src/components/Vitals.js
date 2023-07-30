import React from "react";
import VitalCard from "./VitalCard";
const Vitals = ({ updatedVital }) => {
  const vitalTypes = {
    Sugar: { unit: "mg/dL", lowerLimit: 70, higherLimit: 110 },
    SPO2: { unit: "%", lowerLimit: 80, higherLimit: 100 },
    Systolic: { unit: "mmHg", lowerLimit: 60, higherLimit: 90 },
    Diastolic: { unit: "mmHg", lowerLimit: 120, higherLimit: 150 },
  };
  return (
    <div className="d-flex flex-column flex-md-row  flex-md-wrap flex-lg-nowrap justify-content-md-center align-items-center  align-items-lg-stretch  gap-1">
      {Object.keys(vitalTypes).map((type) => {
        return (
          <VitalCard
            type={type}
            unit={vitalTypes[type].unit}
            lowerLimit={vitalTypes[type].lowerLimit}
            higherLimit={vitalTypes[type].higherLimit}
            updatedVital={updatedVital}
          />
        );
      })}
    </div>
  );
};

export default Vitals;
