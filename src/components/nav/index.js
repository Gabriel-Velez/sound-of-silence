import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  position: fixed;
  top: 40px;
  right: 40px;
  cursor: pointer;
  svg {
    color: red;
    width: 35px;
    height: 35px;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <FontAwesomeIcon icon={faBars} />
    </StyledNav>
  );
}
