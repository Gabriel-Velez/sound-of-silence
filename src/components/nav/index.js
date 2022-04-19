import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import theme from "../../theme";

const StyledNav = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 5;
  transition: opacity ${(props) => props.theme.animation.duration},
    visibility ${(props) => props.theme.animation.duration};
  &.navHidden {
    visibility: collapse;
    opacity: 0;
  }
  svg {
    color: ${(props) => props.theme.colors.lightGrey};
    width: 20px;
    height: 20px;
    padding: 20px;
    cursor: pointer;
  }
`;

export default function Nav() {
  let timer = null;
  const handelUpdate = () => {
    const vid = document.querySelector("#splashVideo");
    const navVar = document.querySelector("#nav");
    navVar.classList.remove("navHidden");
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (!vid.paused) {
        navVar.classList.add("navHidden");
      }
    }, theme.idleTime);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handelUpdate);
    window.addEventListener("scroll", handelUpdate);
    return () => {
      window.removeEventListener("mousemove", handelUpdate);
      window.removeEventListener("scroll", handelUpdate);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);
  return (
    <StyledNav id='nav'>
      <FontAwesomeIcon icon={faBars} />
    </StyledNav>
  );
}
