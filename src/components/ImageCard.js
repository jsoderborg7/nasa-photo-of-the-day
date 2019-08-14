import React from "react";

const ImageCard = props => {
  return (
    <div className= "image-card" key={props.id} >
      <img className="nasa-img" alt= "Astronomy" src={props.url} />
    </div>
  );
};

export default ImageCard;