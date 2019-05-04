import React from "react";
import CardHeader from "@material-ui/core/CardHeader";

const illustrationStyles = {
  img: {
    height: "auto",
    maxHeight: 160
  },
  header: {
    height: 60
  },
  imgContainer: {
    height: 160,
    textAlign: "center"
  }
};

export default function Illustration({ title, image }) {
  return (
    <div>
      <CardHeader style={illustrationStyles.header} title={title} />
      <div style={illustrationStyles.imgContainer}>
        <img src={image} alt="Car" style={illustrationStyles.img} />
      </div>
    </div>
  );
}
