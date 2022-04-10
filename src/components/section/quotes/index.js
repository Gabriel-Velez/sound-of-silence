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
    padding: 20px 0;
  }

  &.quote-column .quote-wrapper {
    display: flex;
    flex-direction: column;
  }

  &.quote-grid .quote-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  &.quote-grid .quote-wrapper figure {
    padding: 10px 50px;
    padding-left: 0;
  }
  &.quote-grid .two {
    grid-column-start: span 2;
  }
`;

export default function Quotes(props) {
  const { quotes, quotesType, quotesSub } = props;
  console.log(props);
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
