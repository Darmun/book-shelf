import React from "react";

const overlayStyles = {
 description:{
  height:275,
  overflowY: "auto",
 },
 text:{
  lineHeight: "1.6rem",
  color: "#222",
  maxWidth: "40rem",
  height:'100%',
  padding: "2rem",
  margin: "auto",
 }
  }

export default ({description, link}) => (
  <div style={overlayStyles.text}>
   <p style={overlayStyles.description}>{description || "No description available"}</p> 
    <p><a href={link}>See at books google</a></p>
  </div>
);
