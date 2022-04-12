import React from "react";
import styled from "styled-components";

const StyledQuote = styled.div`
  .author {
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSize.author};
    text-transform: uppercase;
    display: inline;
  }
  time {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.fontSize.date};
    text-transform: uppercase;
    margin-left: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
  }
  time::before {
    content: "|";
    margin-right: 10px;
  }
  q {
    font-size: ${(props) => props.theme.fontSize.quote};
  }
  cite {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.fontSize.p};
    display: block;
    font-style: normal;
    margin-top: 20px;
  }
  figcaption {
    margin-bottom: 20px;
  }
  figure {
    margin: 0;
    margin-bottom: 20px;
    border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  }
`;

export default function Quotes(props) {
  const { quote, author, date, dateTime, source, sourceTitle, size } = props;

  return (
    <StyledQuote className={size}>
      <figure>
        <figcaption>
          <div className='author'>{author}</div>
          <time dateTime={dateTime}>{date}</time>
        </figcaption>
        <q>{quote}</q>
        <cite>
          <a href={source}>{sourceTitle}</a>
        </cite>
      </figure>
    </StyledQuote>
  );
}
