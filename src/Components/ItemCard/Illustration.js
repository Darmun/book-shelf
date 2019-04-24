import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import testCar from "./testImg.jpg";

const imgStyle = {
  width: "100%",
  height: "auto",
}

export default function Illustration({info}) {
  return (
    <div>
      <CardHeader title={info} />
      <img src={testCar} alt="Car" style={imgStyle} />
    </div>
  );
}

