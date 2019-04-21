import React from "react";

export default ({author, published, pages}) => (
  <div>
    <p>Author: {author}</p>
    <p>Published in: {published}</p>
    <p>Pages: {pages}</p>
  </div>
);
