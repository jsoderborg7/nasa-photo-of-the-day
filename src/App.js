import React from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";
import styled from "styled-components";

function App() {

  return(
    <div>
      <StyledHeading>
        <h1>NASA Picture of the Day</h1>
      </StyledHeading>
      <ImageCard />
    </div>
  )
}

const StyledHeading = styled.h1 `
  font-size: 3rem;
  width: 100%;
  text-align: center;
  font-family: 'Space Mono';
`;

export default App;
