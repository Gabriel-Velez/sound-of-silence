import React from "react";
import styled from "styled-components";
import Quote from "./Quote";

const StyledQuotes = styled.div`
  &.quote-column {
    float: right;
    width: 33%;
    margin-left: 50px;
  }

  .quote-wrapper {
    border: double black;
    border-left: none;
    border-right: none;
    margin-bottom: 40px;
  }

  &.quote-column .quote-wrapper {
    display: flex;
    flex-direction: column;
  }

  &.quote-column .quote-wrapper figure {
    padding: 20px 0;
  }

  &.quote-grid .quote-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }

  &.quote-grid .quote-wrapper figure {
    padding: 20px 50px;
    padding-left: 0;
  }

  &.quote-grid .two {
    grid-column-start: span 2;
  }
  &.quote-grid .three {
    grid-column-start: span 3;
  }

  @media only screen and (${(props) => props.theme.breakPoints.tablet}) {
    &.quote-column {
      float: none;
      width: 100%;
      margin-left: 0;
    }
    &.quote-grid .quote-wrapper {
      grid-template-columns: 1fr;
    }
    &.quote-grid .two,
    &.quote-grid .three {
      grid-column-start: initial;
    }
    &.quote-grid .quote-wrapper figure {
      padding: 20px 0;
    }
  }
`;

export default function Quotes(props) {
  const { quotes, quotesType, quotesSub } = props;
  return (
    <StyledQuotes className={quotesType === "grid" ? "quote-grid" : "quote-column"}>
      <h4>{quotesSub}</h4>
      <div className='quote-wrapper'>
        {quotes.map((quote) => {
          return (
            <Quote
              key={quote.id}
              quote={quote.quote}
              author={quote.author}
              date={quote.date}
              dateTime={quote.dateTime}
              source={quote.source}
              sourceTitle={quote.sourceTitle}
              size={quote.size}></Quote>
          );
        })}
      </div>
    </StyledQuotes>
  );
}
