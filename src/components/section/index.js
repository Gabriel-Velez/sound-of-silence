import React from "react";
import Header from "./Header";
import Article from "./Article";
import Quotes from "./quotes";
import styled, { keyframes } from "styled-components";

const StyledSection = styled.section``;

export default function Section(props) {
  const { title, description, quotes, quotesType, quotesSub, articles } = props;
  return (
    <StyledSection>
      <Header title={title} description={description}></Header>
      {articles.map((article) => {
        return <Article key={article.id} link={article.link} title={article.title}></Article>;
      })}
      <Quotes quotes={quotes} quotesType={quotesType} quotesSub={quotesSub}></Quotes>
    </StyledSection>
  );
}
