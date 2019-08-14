import React, {useState, useEffect} from "react";
import axios from "axios";
import Date from "./components/Date";
import Explanation from "./components/Explanation";
import Media from "./components/Media";
import Title from "./components/Title";
import "./App.css";

function App() {
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
      <h1>NASA Picture of the Day</h1>
      <Title title={title}/>
      <Date date={date} />
      <Media url={url}/>
      <Explanation explanation={explanation}/>
    </div>
  )
}

export default App;
