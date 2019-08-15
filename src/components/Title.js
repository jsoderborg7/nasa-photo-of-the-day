import React from "react";
import styled from "styled-components";

const Title = props => {
  return(
    <StyledTitle>
      <h2>"{props.title}"</h2>
    </StyledTitle>
  )
};

const StyledTitle = styled.h2 `
  font-size: 2rem;
  font-family: "Space Mono";
  text-align: center;

  @media screen and (max-width: 500px){
    font-size: 1.5rem;
  }
`;

export default Title;