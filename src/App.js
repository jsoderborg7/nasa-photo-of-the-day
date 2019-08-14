import React, {useState, useEffect} from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {

  return(
    <div>
      <h1>NASA Picture of the Day</h1>
      <ImageCard />
    </div>
  )
}

export default App;
