import React from "react";

export default ({authors, published, pages}) => (
  <div>
    <p>{listAuthors(authors)}</p>
    <p>Published in: {published}</p>
    <p>Pages: {pages || "-"}</p>
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