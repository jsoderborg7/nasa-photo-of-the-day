import React from "react";
import styled from "styled-components";

const Media = props => {
  return (
    <StyledMedia>
      <div className="image">
        <img src={props.media} className="img" alt="Media" />
      </div>
    </StyledMedia>
  )
}

const StyledMedia = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

export default Media;