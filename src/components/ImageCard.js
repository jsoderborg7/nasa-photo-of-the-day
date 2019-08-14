import React from "react";

const ImageCard = props => {
  return (
    <div className= "image-card" key={props.id} >
      <img className="nasa-img" alt="atronomy photo" src={props.imgUrl} />
    </div>
  );
};

export default ImageCard;