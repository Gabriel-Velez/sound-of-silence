import React from "react";
import styled, { keyframes } from "styled-components";

const StyledArticle = styled.div``;

export default function Article(props) {
  const { link, title } = props;
  return (
    <StyledArticle>
      <a href={link}>{title}</a>
    </StyledArticle>
  );
}
