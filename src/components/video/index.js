import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import Vimeo from "@u-wave/react-vimeo";

const StyledVideo = styled.div`
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  width: 100vw;
  z-index: 1;
  position: relative;
  flex-direction: column;
  display: none;

  &.active {
    display: flex;
  }

  img {
    width: 100vw;
    max-height: 100vh;
    object-fit: cover;
  }

  video {
    max-height: 100vh;
    transition: opacity 0.5s;
  }
  .videoTextWrapper {
    color: ${(props) => props.theme.colors.white};
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s, visibility 0.5s;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    margin: 0;
    position: absolute;
    background-color: ${(props) => props.theme.colors.opaqueBlack};
    visibility: hidden;
    &.light {
      background-color: ${(props) => props.theme.colors.opaqueLightBlack};
    }
    > div {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, calc(-50% + 25px));
      opacity: 0;
      transition: opacity 0.5s, transform 0.5s;
      font-size: ${(props) => props.theme.fontSize.videoText};
      display: flex;
      flex-direction: column;
      text-align: center;
      z-index: 20;
      pointer-events: none;
      a {
        pointer-events: initial;
      }
      svg {
        display: block;
        font-size: ${(props) => props.theme.fontSize.playButton};
        margin-bottom: 30px;
      }
    }

    &.paused {
      content: "Lorem Ipsum";
      visibility: visible;
      opacity: 1;
      > div {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    .videoTextWrapper {
      > div {
        font-size: ${(props) => props.theme.fontSize.mobile.videoText};
        svg {
          font-size: ${(props) => props.theme.fontSize.mobile.playButton};
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const StyledVimeo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.opaqueLightBlack};
  position: fixed;
  z-index: 100;
  display: grid;
  place-content: center;
  &.hidden {
    display: none;
  }
  .closeVimeo {
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${(props) => props.theme.colors.white};
    width: 30px;
    height: 30px;
    padding: 20px;
    cursor: pointer;
  }
`;

export default function Video() {
  const displayVideo = () => {
    const vidWrapper = document.querySelector("#styledMain");
    vidWrapper.classList.remove("hidden");
  };
  const closeVideo = () => {
    const vidWrapper = document.querySelector("#styledMain");
    vidWrapper.classList.add("hidden");
  };

  return (
    <>
      <StyledVideo className='active' id='styledLoop'>
        <div
          onClick={() => displayVideo()}
          onTouchStart={() => displayVideo()}
          className='videoTextWrapper paused light'>
          <div>
            <FontAwesomeIcon icon={faCirclePlay} />
          </div>
        </div>
        <video
          onClick={() => displayVideo()}
          onTouchStart={() => displayVideo()}
          className='loopingVid'
          id='loopingVideo'
          width='100%'
          controls={false}
          autoPlay
          muted
          loop>
          <source src={require("../../assets/loop.mp4")} type='video/mp4' />
        </video>
      </StyledVideo>
      <StyledVimeo id='styledMain' className='hidden'>
        <FontAwesomeIcon
          icon={faXmark}
          className='closeVimeo'
          onClick={() => closeVideo()}
          onTouchStart={() => closeVideo()}
        />
        <Vimeo
          video='https://player.vimeo.com/video/737602564?h=98a9e4b671'
          // video='https://player.vimeo.com/video/737602564?h=98a9e4b671&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          // video='https://vimeo.com/226053498'
        />
      </StyledVimeo>
    </>
  );
}
