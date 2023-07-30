import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { getLatestVital } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";

export default function VitalCard({
  type,
  lowerLimit,
  higherLimit,
  unit,
  updatedVital,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ value: "", indicator: "", date: "" });

  useEffect(() => {
    async function getLatestValue(type) {
      setLoading(true);
      let response = await getLatestVital(type);
      setLoading(false);
      if (response.data) {
        setData({
          ...response.data,
          indicator:
            response.data.value > lowerLimit &&
            response.data.value < higherLimit
              ? "safe"
              : "danger",
        });
      }
    }
    if (updatedVital === "") getLatestValue(type);
    else {
      if (updatedVital === type) getLatestValue(type);
    }
  }, [updatedVital]);

  // useEffect(() => {
  //   console.log(updatedVital);
  //   console.log(type);
  //   if (updatedVital === type) getLatestValue(type);
  // }, [updatedVital]);

  return (
    <Card
      className={`text-center p-2 col-12 col-md-5   col-lg-3  ${
        data.value
          ? data.indicator === "safe"
            ? "bg-success text-light"
            : "bg-danger text-light"
          : ""
      }`}
    >
      <CardContent>
        <Typography variant="h5" color="text.light" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h3" component="div">
          {loading && <CircularProgress />}
          {!loading && (data.value ? data.value : "-")}
          {data.value && <span className="fs-6">{unit}</span>}
        </Typography>
        <Typography sx={{ m: 1.5 }} color="text.light">
          {data.value ? (
            data.indicator === "safe" ? (
              <span>
                <CheckCircleIcon /> You are doing Well
              </span>
            ) : (
              <span>
                <ErrorIcon /> You need a check up
              </span>
            )
          ) : (
            "-"
          )}
        </Typography>
      </CardContent>
      <div className="d-flex flex-column">
        <div>Last Updated</div>
        <div>
          {loading && "..."}
          {!loading &&
            (data.date
              ? moment(new Date(data.date)).format("YYYY-MM-DD")
              : "-")}
        </div>
      </div>
    </Card>
  );
}
