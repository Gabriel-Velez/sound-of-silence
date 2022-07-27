import React from "react";
import Header from "./header";
import Article from "./article";
import Quotes from "./quotes";
import styled from "styled-components";

const StyledSection = styled.section`
  overflow: auto;
  overflow-x: hidden;
  margin: 75px 0;
  &:first-of-type {
    margin-top: 20px;
  }

  h4 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.quoteHeadline};
    margin: 10px 0;
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    margin: 35px 0;
  }
`;

export default function Section(props) {
  const { title, description, quotes, quotesType, quotesSub, articles } = props;
  return (
    <StyledSection>
      <Header title={title} description={description}></Header>
      <Quotes quotes={quotes} quotesType={quotesType} quotesSub={quotesSub}></Quotes>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            link={article.link}
            title={article.title}
            source={article.source}></Article>
        );
      })}
    </StyledSection>
  );
}
