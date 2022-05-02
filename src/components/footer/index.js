import React from "react";
import styled from "styled-components";
import img from "../../assets/review.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  border-top: double black;
  display: flex;
  padding: 40px 0;
  flex-grow: 1;
  justify-content: space-between;
  .end {
    display: flex;
    align-items: center;
    img {
      max-width: 200px;
      object-fit: contain;
      margin: 0 5px;
    }
    p {
      margin-left: auto;
    }
    .sm {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      > * {
        font-size: 1.75rem;
        margin: 0 10px;
      }
    }
  }
  @media only screen and (${(props) => props.theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: column;

    .end {
      .sm {
        flex-wrap: wrap;
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>
          © 2022 zanie. - All Rights Reserved.
          <br />
          Reserved | <a href='https://zanie.app/policies'>Privacy Policy</a>
        </p>
      </div>
      <div className='end'>
        <a href='https://www.producthunt.com/posts/zanie?utm_source=badge-review&utm_medium=badge&utm_souce=badge-zanie#discussion-body'>
          <img src={img} alt='Product Hut' />
        </a>
        <div className='sm'>
          <a href='https://twitter.com/zanie_app'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://www.instagram.com/zanie.for.remote.work/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com/company/zanie-app/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://musings.zanie.app/podcast/'>
            <FontAwesomeIcon icon={faPodcast} />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}
