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
  width: 100%;
  padding-left: 17%;
  margin: auto;
`

export default Date;