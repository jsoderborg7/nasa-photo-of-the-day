import React from "react";
import ImageCard from "./ImageCard";

const Media = props => {
  return (
    <img src={props.media} className="img" alt="Media" />
  )
}

export default Media;