import React, {useState, useEffect} from "react";
import axios from "axios";
import Date from "./Date";
import Explanation from "./Explanation";
import Media from "./Media";
import Title from "./Title";

function ImageCard() {
  const [nasa, setNasa]= useState();
  console.log(nasa);

  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=rSkMBbZioFkicJWaH4Lx7MX5KteFKZSHOi3BV4f3`)
    .then(response =>{
      setNasa(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [] );

  let date = null;
  let explanation = null;
  let url = null;
  let title = null;

   if(nasa) {
    date = nasa.date;
    explanation = nasa.explanation;
    url = nasa.url;
    title = nasa.title;
  }

  return(
    <div className="container">
      <Title title={title}/>
      <Date date={date} />
      <Media url={url}/>
      <Explanation explanation={explanation}/>
    </div>
  )
}

export default ImageCard;