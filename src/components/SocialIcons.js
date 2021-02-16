import styled from "styled-components";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcons() {
  return (
    <StyledIcons>
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
    </StyledIcons>
  );
}

const StyledIcons = styled.div`
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

export default SocialIcons;
