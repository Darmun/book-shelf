import React from "react";
import CardHeader from "@material-ui/core/CardHeader";

const imgStyle = {

  height: "auto",
  maxHeight: 160
}

export default function Illustration({title,image}) {
  return (
    <div>
      <CardHeader title={title} />
      <img src={image} alt="Car" style={imgStyle} />
    </div>
  );
}

