import React, {useState, useEffect} from "react";
import axios from "axios";
import Date from "./Date";
import Explanation from "./Explanation";
import Media from "./Media";
import Title from "./Title";



const ImageCard = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [media, setMedia] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=rSkMBbZioFkicJWaH4Lx7MX5KteFKZSHOi3BV4f3`)
      .then(response => {
        setTitle(response.data.title);
        setDate(response.data.date);
        setMedia(response.data.url);
        setExplanation(response.data.explanation);
        console.log(response);
      });
  },[]);

  return (
    <div className="container">
      <>
        <Title title = {title}/>
        <Date date = {date}/>
        <Media media = {media}/>
        <Explanation explanation = {explanation}/>
      </>
    </div>
  )
}

export default ImageCard;