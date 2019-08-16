import React from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";
import styled from "styled-components";


function App() {
  return(
      <StyledApp>
        <div className="container">
          <h1>NASA Picture of the Day</h1>
          <ImageCard />
        </div>
      </StyledApp>
  )
}

const StyledApp = styled.div `
  width: 100%;

h1 {
  font-size: 5rem;
  width: 100%;
  text-align: center;
  font-family: 'Space Mono';

  @media screen and (max-width: 500px){
    font-size: 3.5rem;
  }
}  

`;

export default App;
