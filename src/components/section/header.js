import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 20px 0;
  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    color: ${(props) => props.theme.colors.blue};
    margin: 0;
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontSize.p};
    margin: 0;
  }
  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    h2 {
      font-size: ${(props) => props.theme.fontSize.mobile.h2};
    }
  }
`;

export default function Header(props) {
  const { title, description } = props;
  return (
    <StyledHeader>
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledHeader>
  );
}
