import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

function HeaderInfoBox() {
  return (
    <LinkBox>
      <AboutText>
        <StyledEQH>
          <span id="energetic">Energetic. </span>
          <span id="quirky">Quirky. </span>
          <span id="friendly">Friendly. </span>
        </StyledEQH>
        <p>
          Anna McDougall is a full-stack developer with a passion for
          JavaScript.
        </p>

        <p>
          Now, she seeks the next adventure: a career in which her expertise and
          enthusiasm can help drive a great product and contribute to a great
          team.
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

const StyledEQH = styled.p`
  padding-top: 1rem;
  * {
    font-family: "Staatliches", sans-serif;
    font-size: 2.1rem;
  }
  #energetic {
    text-shadow: 0px 0px 5px yellow;
  }
  #quirky {
    text-shadow: 0px 0px 5px aqua;
  }
  #friendly {
    text-shadow: 0px 0px 5px fuchsia;
  }
`;

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
  }
  @-moz-document url-prefix() {
    background: black;
  }
`;

const AboutText = styled.p`
  p {
    font-size: 1em;
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
