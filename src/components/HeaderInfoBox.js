import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import BrandWords from "./BrandWords";

function HeaderInfoBox() {
  return (
    <LinkBox>
      <BrandWords />
      <AboutText>
        <p>
          Anna McDougall is a full-stack developer with a passion for
          JavaScript. She is known as "that dev who used to be an opera singer".
        </p>

        <p>
          In addition to her upcoming position as Junior Software Engineer at{" "}
          <a href="https://www.novatec-gmbh.de/">Novatec Consulting GmbH</a>,
          Anna also enjoys blogging, creating YouTube videos, and speaking at
          events.
        </p>
      </AboutText>
      <SocialIcons>
        <a
          href="http://www.twitter.com/AnnaJMcDougall"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/annajmcdougall/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/AJMcDee" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCjJzKrbr3WGn1xE0LAQ91yA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
      </SocialIcons>
    </LinkBox>
  );
}

const LinkBox = styled.div`
  text-align: center;
  margin-top: 1rem;
  min-height: 180px;
  max-width: 85vw;
  min-width: 200px;
  border: 5px solid white;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (min-width: 1024px) {
    max-width: 40vw;
    padding: 10px;
  }
  @-moz-document url-prefix() {
    background: black;
  }
`;

const AboutText = styled.p`
  p {
    font-size: 1em;
    a {
      color: white;
      text-decoration: underline;
    }
    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }
`;
const SocialIcons = styled.div`
  text-align: right;
  color: white;
  font-size: 2rem;
  a {
    margin: 10px;
    color: white;
  }

  svg:hover {
    color: #8d5a97;
    cursor: pointer;
  }
  @media (min-width: 360px) {
    font-size: 3rem;
  }
`;

export default HeaderInfoBox;
