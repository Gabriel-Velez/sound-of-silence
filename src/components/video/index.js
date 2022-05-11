import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

const StyledVideo = styled.div`
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

export default function Video() {
  const displayText = (inVid) => {
    const vid = document.querySelector("#splashVideo");
    const vidText = document.querySelector("#videoTextWrapper");
    if (vid.paused) {
      vidText.classList.remove("paused");
      vidText.classList.add("playing");
      if (inVid === true) vid.play();
    } else {
      vidText.classList.add("paused");
      vidText.classList.remove("playing");
      if (inVid === true) vid.pause();
    }
  };
  const displayTextEnded = () => {
    const vidText = document.querySelector("#videoTextWrapper");
    vidText.classList.add("paused");
    vidText.classList.remove("playing");
  };

  const onPlay = () => {
    const vidText = document.querySelector("#videoTextWrapper");
    vidText.classList.remove("paused");
    vidText.classList.add("playing");
  };

  const onPause = () => {
    const vidText = document.querySelector("#videoTextWrapper");
    vidText.classList.add("paused");
    vidText.classList.remove("playing");
  };

  const displayVideo = () => {
    const styledLoop = document.querySelector("#styledLoop");
    const styledMain = document.querySelector("#styledMain");
    styledLoop.classList.remove("active");
    styledMain.classList.add("active");

    const vid = document.querySelector("#splashVideo");
    const vidText = document.querySelector("#videoTextWrapper");
    vidText.classList.remove("paused");
    vid.play();
    vid.requestFullscreen();
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
            <span>Play in Full-Screen</span>
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
      <StyledVideo id='styledMain'>
        <div
          onClick={() => displayText(true)}
          onTouchStart={() => displayText(true)}
          id='videoTextWrapper'
          className='videoTextWrapper paused'>
          <div>
            <FontAwesomeIcon icon={faCirclePause} />
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
          onPlay={onPlay}
          onPause={onPause}
          onEnded={displayTextEnded}
          className='mainVid onlyTimeline'
          id='splashVideo'
          width='100%'
          controls
          controlsList='nodownload noplaybackrate'
          disablePictureInPicture>
          <source src='https://www.pivotforhumanity.com/scenes.mp4' type='video/mp4' />
        </video>
      </StyledVideo>
    </>
  );
}
