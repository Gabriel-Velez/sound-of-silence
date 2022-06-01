import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope, faHashtag, faHouse } from "@fortawesome/free-solid-svg-icons";
import theme from "../../theme";

const StyledNav = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
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
  .modal {
    position: fixed;
    background-color: ${(props) => props.theme.colors.red};
    width: 100%;
    max-width: 270px;
    top: 0;
    z-index: 100;
    right: 0;
    padding-bottom: 20px;
    transform: translateX(300px);
    transition: transform ${(props) => props.theme.animation.duration};
    &.open {
      transform: translateX(0);
    }
    button {
      padding: 0;
      background: transparent;
      border: none;
      float: right;
      svg {
        color: ${(props) => props.theme.colors.white};
        padding: 20px;
        &:hover {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
    .navLink {
      color: ${(props) => props.theme.colors.white};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      padding: 20px 40px;
      a {
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.colors.black};
          font-weight: 600;
        }
      }
      &:first-of-type {
        margin-top: 50px;
      }
      &:last-of-type {
        margin-bottom: 50px;
      }
    }
    .sm {
      width: 100%;
      display: flex;
      justify-content: center;
      svg {
        color: ${(props) => props.theme.colors.white};
        &:hover {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
  .cover {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.opaqueBlack};
    transition: opacity ${(props) => props.theme.animation.duration},
      visibility ${(props) => props.theme.animation.duration};
    opacity: 0;
    visibility: hidden;
    z-index: 99;
    &.open {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    .modal {
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Nav() {
  let timer = null;
  const openNav = () => {
    document.querySelector(".modal").classList.add("open");
    document.querySelector(".cover").classList.add("open");
  };
  const closeNav = () => {
    document.querySelector(".modal").classList.remove("open");
    document.querySelector(".cover").classList.remove("open");
  };
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
    <StyledNav className='open' id='nav'>
      <FontAwesomeIcon icon={faBars} onClick={openNav} />
      <div className='modal'>
        <button onClick={closeNav}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className='navLink'>
          <a onClick={closeNav} href='#splashVideo'>
            Watch our video
          </a>
        </div>
        <div className='navLink'>
          <a onClick={closeNav} href='#supporting'>
            Supporting resources
          </a>
        </div>
        <div className='navLink'>
          <a
            onClick={closeNav}
            href='https://betwixtus.slack.com/apps/A3E3A1AKU-zanie?tab=more_info'>
            Install Zanie on slack
          </a>
        </div>
        <div className='navLink'>
          <a
            onClick={closeNav}
            href='https://docs.google.com/presentation/d/1jAjymoiFNqt1tz7DWlFE011qst7znfKNe0nLPM5as18/edit?usp=sharing'>
            Download our sales material
          </a>
        </div>
        <div className='navLink'>
          <a onClick={closeNav} href='https://zanie.app'>
            More about Zanie
          </a>
        </div>
        <div className='navLink'>
          <a onClick={closeNav} href='mailto:thegang@zanie.app'>
            Get in touch
          </a>
        </div>
      </div>
      <div className='cover' onClick={closeNav}></div>
    </StyledNav>
  );
}
