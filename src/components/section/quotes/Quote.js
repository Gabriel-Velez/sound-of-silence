import React from "react";
import styled, { keyframes } from "styled-components";

const StyledQuote = styled.div``;

export default function Quotes(props) {
  console.log(props);
  const { quote, author, date, dateTime, source, sourceTitle, size } = props;

  return (
    <StyledQuote className={size}>
      <figure>
        <figcaption>
          <div>{author}</div>
          <time dateTime={dateTime}>{date}</time>
        </figcaption>
        <blockquote cite={source}>
          <p>{quote}</p>
        </blockquote>
        <cite>
          <a href={source}>{sourceTitle}</a>
        </cite>
      </figure>
    </StyledQuote>
  );
}
