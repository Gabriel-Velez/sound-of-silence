import React from "react";
import styled, { keyframes } from "styled-components";

const StyledHeader = styled.div``;

export default function Header(props) {
  const { title, description } = props;
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledHeader>
  );
}
