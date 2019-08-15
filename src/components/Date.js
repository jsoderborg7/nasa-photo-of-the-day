import React from "react";
import styled from "styled-components";

const Date = props => {
  return(
    <StyledDate>
      <h3>{props.date}</h3>
    </StyledDate>
  )
};

const StyledDate = styled.h3 `
  font-size: 1.5rem;
  font-family: "Space Mono";

  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`

export default Date;