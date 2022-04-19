import React, { useEffect } from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  width: 100vw;
  z-index: 1;
  img {
    width: 100vw;
    max-height: 100vh;
    object-fit: cover;
  }

  video {
    max-height: 100vh;
    transition: opacity ${(props) => props.theme.animation.duration};
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
  // useEffect(() => {
  //   const vid = document.querySelector("#splashVideo");
  //   vid.play();
  // }, []);

  let timer = null;

  return (
    <StyledVideo>
      {/* <img src={require("../../assets/videoPlaceholder.png")} /> */}
      {/* <video autoPlay muted> */}
      <video
        className='onlyTimeline'
        id='splashVideo'
        width='100%'
        controls
        controlsList='nodownload noplaybackrate'
        disablePictureInPicture>
        <source src={require("../../assets/scenes.mp4")} type='video/mp4' />
      </video>
    </StyledVideo>
  );
}
