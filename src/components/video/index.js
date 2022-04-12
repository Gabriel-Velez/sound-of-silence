import React from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  img {
    width: 100vw;
    max-height: 100vh;
    object-fit: cover;
  }
`;

export default function Video() {
  return (
    <StyledVideo>
      <img src={require("../../assets/videoPlaceholder.png")} />
    </StyledVideo>
  );
}
