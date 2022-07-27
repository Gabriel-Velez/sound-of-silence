import React from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.article};
  margin-bottom: 20px;
  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    font-size: ${(props) => props.theme.fontSize.mobile.article};
  }
  .source {
    text-transform: uppercase;
  }
  .title {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export default function Article(props) {
  const { link, title, source } = props;
  return (
    <StyledArticle className='article'>
      <div className='source'>{source}</div>
      <a href={link}>
        <div className='title'>{title}</div>
      </a>
    </StyledArticle>
  );
}
