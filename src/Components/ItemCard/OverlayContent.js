import React from "react";



export default ({description, link}) => (
  <div className="text">
   {description && 
   (<p>description: {description}</p>) }
    <p><a href={link}>See direct description</a></p>
  </div>
);
