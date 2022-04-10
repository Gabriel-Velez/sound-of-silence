import React from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.article};
  margin-bottom: 20px;
`;

export default function Article(props) {
  const { link, title } = props;
  return (
    <StyledArticle className='article'>
      <a href={link}>{title}</a>
    </StyledArticle>
  );
}
