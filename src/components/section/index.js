import React from "react";
import Header from "./header";
import Article from "./article";
import Quotes from "./quotes";
import styled from "styled-components";

const StyledSection = styled.section`
  overflow: auto;
  overflow-x: hidden;
  margin: 75px 0;
  & > .article:nth-child(even) {
    color: ${(props) => props.theme.colors.grey};
  }
  h4 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.quoteHeadline};
    margin: 10px 0;
  }
`;

export default function Section(props) {
  const { title, description, quotes, quotesType, quotesSub, articles } = props;
  return (
    <StyledSection>
      <Header title={title} description={description}></Header>
      <Quotes quotes={quotes} quotesType={quotesType} quotesSub={quotesSub}></Quotes>
      {articles.map((article) => {
        return <Article key={article.id} link={article.link} title={article.title}></Article>;
      })}
    </StyledSection>
  );
}