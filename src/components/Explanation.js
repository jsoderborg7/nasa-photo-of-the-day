import React from "react";
import styled from "styled-components";

const Explanation = props => {
  return(
    <StyledExplanation>
      <div className="explanation">
        <h3>What is this?</h3>
        <p>{props.explanation}</p>
      </div>
    </StyledExplanation>
  )
};

const StyledExplanation = styled.div `
  width: 80%;
  margin: auto;
  display: flex;

  @media screen and (max-width: 500px){
    width: 90%;
  }

h3 {
  font-size: 2.5rem;
  font-family: "Space Mono";
  text-align: center;
  border-bottom: 2px solid black;

  @media screen and (max-width: 500px){
    font-size: 2rem;
  }
}

p {
  font-size: 1.5rem;
  line-height: 3rem;
  text-indent: 5%;
 } 
`;

export default Explanation;