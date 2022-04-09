import React from "react";
import styled, { keyframes } from "styled-components";
import Quote from "./Quote";

const StyledQuotes = styled.div``;

export default function Quotes(props) {
  const { quotes, quotesType, quotesSub } = props;
  return (
    <div>
      <h4>{quotesSub}</h4>
      <StyledQuotes className={quotesType === "grid" ? "quote-grid" : "quote-flex"}>
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
      </StyledQuotes>
    </div>
  );
}
