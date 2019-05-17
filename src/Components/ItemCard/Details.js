import React from "react";

const detailStyles = {
  container:{
    paddingTop:5
  },
  paragraph:{
   padding: "0 5px",
   height: 40
  }
   }

export default ({authors, published, pages}) => (
  <div style={detailStyles.container}>
    <p style={detailStyles.paragraph}>{listAuthors(authors)}</p>
    <p style={detailStyles.paragraph}>Published in: {published}</p>
    <p style={detailStyles.paragraph}>Pages: {pages || "-"}</p>
  </div>
);


function listAuthors(names = ["unknown"]){
if(names.length > 1){
  return "Authors: " + names.reduce((listing, currentName) => {
    return listing += ", " + currentName;
  })
}
else{
return "Author: " + names[0]; 
}
}