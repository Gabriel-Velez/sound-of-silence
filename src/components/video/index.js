import React from "react";
import styled from "styled-components";
import initalImg from "../../assets/quote.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const StyledVideo = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  width: 100vw;
  z-index: 1;
  position: relative;
  img {
    width: 100vw;
    max-height: 100vh;
    object-fit: cover;
  }

  video {
    max-height: 100vh;
    transition: opacity ${(props) => props.theme.animation.duration};
  }
  .videoTextWrapper {
    color: ${(props) => props.theme.colors.white};
    opacity: 0;
    transition: opacity ${(props) => props.theme.animation.duration},
      transform ${(props) => props.theme.animation.duration};
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.colors.opaqueBlack};
    margin: 0;
    position: absolute;

    > div {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, calc(-50% + 25px));
      opacity: 0;
      transition: opacity ${(props) => props.theme.animation.duration},
        transform ${(props) => props.theme.animation.duration};
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
        font-size: 6rem;
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
    &.pausedInital {
      background-image: url(${initalImg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      span {
        display: none;
      }
    }
  }

  .onlyTimeline::-webkit-media-controls-play-button,
  .onlyTimeline::-webkit-media-controls-current-time-display,
  .onlyTimeline::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  .onlyTimeline::-webkit-media-controls-fullscreen-button {
    margin-right: 20px;
  }

  .vidHidden::-webkit-media-controls-panel {
    opacity: 0;
  }
`;

export default function Video() {
  const displayText = (inVid) => {
    const vid = document.querySelector("#splashVideo");
    const vidText = document.querySelector(".videoTextWrapper");
    if (vid.paused) {
      vidText.classList.remove("paused");
      setTimeout(function () {
        vidText.classList.remove("pausedInital");
      }, 500);
      vidText.classList.add("playing");
      if (inVid === true) vid.play();
    } else {
      vidText.classList.add("paused");
      vidText.classList.remove("playing");
      if (inVid === true) vid.pause();
    }
  };
  const displayTextEnded = () => {
    const vidText = document.querySelector(".videoTextWrapper");
    vidText.classList.add("paused");
    vidText.classList.remove("playing");
  };

  return (
    <StyledVideo>
      <div onClick={() => displayText(true)} className='videoTextWrapper paused pausedInital'>
        <div>
          <FontAwesomeIcon icon={faCirclePlay} />
          <span>
            Lorem Ipsum
            <br />
            <a target='_blank' href='https://www.google.com'>
              link
            </a>
          </span>
        </div>
      </div>
      <video
        onClick={() => displayText(false)}
        onEnded={displayTextEnded}
        className='onlyTimeline'
        id='splashVideo'
        width='100%'
        controls
        controlsList='nodownload noplaybackrate'
        disablePictureInPicture>
        <source src={require("../../assets/opening.mp4")} type='video/mp4' />
      </video>
    </StyledVideo>
  );
}
