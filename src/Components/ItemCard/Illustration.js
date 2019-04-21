import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import testCar from "./testImg.jpg";


export default function Illustration({info}) {
  return (
    <div>
      <CardHeader title={info} />
      <img src={testCar} alt="Car" className="image" />
    </div>
  );
}

