import styled from "styled-components";
import bgImage from "../img/bg-purple-abstract.jpg";
import { HeaderH2, HeaderH1 } from "./elements/Headers";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Header() {
  const [typingActive, setTypingActive] = useState("hide");

  useEffect(() => {
    setTypingActive("typing");
  }, []);

  return (
    <HeaderDiv>
      <HoldText>
        <HeaderH1>Anna McDougall</HeaderH1>
        <HeaderH2 className={typingActive}>Full-Stack Web Developer</HeaderH2>
      </HoldText>

      <LinkBox>
        <AboutText>
          <StyledEQH>
            <span id="energetic">Energetic. </span>
            <span id="quirky">Quirky. </span>
            <span id="helpful">Helpful. </span>
          </StyledEQH>
          <p>
            Anna McDougall is a full-stack developer with a passion for
            JavaScript.
          </p>

          <p>
            Now, she seeks the next adventure: a career in which her expertise
            and enthusiasm can help drive a great product and contribute to a
            great team.
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
    </HeaderDiv>
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
  #helpful {
    text-shadow: 0px 0px 5px fuchsia;
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

const HeaderDiv = styled.header`
  padding-top: 40px;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
`;

const HoldText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 3vh;
  }
  @media (min-width: 1200px) {
    text-align: left;
    align-content: flex-start;
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

export default Header;
