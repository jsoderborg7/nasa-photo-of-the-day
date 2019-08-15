import React, {useState, useEffect} from "react";
import axios from "axios";
import Date from "./Date";
import Explanation from "./Explanation";
import Media from "./Media";
import Title from "./Title";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";


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
    <div>
      <>
        <Title title = {title}/>
        <StyledContent>
          <div>
            <Date date = {date}/>
            <Media media = {media}/>
          </div>
        </StyledContent>
        <Explanation explanation = {explanation}/>
        <GlobalStyle />
      </>
    </div>
  )
}

const StyledContent = styled.div `
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export default ImageCard;