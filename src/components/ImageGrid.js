import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

export default function ImageGrid() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    // axios.get(`https://api.nasa.gov/planetary/apod?api_key=rSkMBbZioFkicJWaH4Lx7MX5KteFKZSHOi3BV4f3`)
    .then(response => {
      const images = response.data;
      console.log(images);
      setImage(images);
    });
  }, []);
  return (
    <div className="image">
      {images.map(image =>{
        return (
          <ImageCard
            key={image.id}
            id={image.id}
            title={image.title}
            description={image.description}
          />
        );
      })}
    </div>
  );
}