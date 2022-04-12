import React from "react";
import styled from "styled-components";
import img from "../../assets/zanieLogo.svg";

const StyledFooter = styled.footer`
  display: flex;
  margin-bottom: 40px;
  img {
    object-fit: contain;
    width: 25%;
    max-width: 200px;
  }
  p {
    margin-left: auto;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img src={require("../../assets/zanieLogo.png")} />
      <p>© 2022 zanie. - All Rights Reserved.</p>
    </StyledFooter>
  );
}
