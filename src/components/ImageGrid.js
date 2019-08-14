import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

export default function ImageGrid() {
  const [nasaImg, setNasaImg] = useState([]);
    console.log(nasaImg);

  useEffect(() => {
    // axios.get(`https://api.nasa.gov/planetary/apod?api_key=rSkMBbZioFkicJWaH4Lx7MX5KteFKZSHOi3BV4f3`)
    .then(response => {
      setNasaImg(response.data)
    }) .catch((error) =>{
      console.log(error)
    })
  },[])
  return (
    <div className="Image">
      <ImageCard/>
    </div>
  );
}