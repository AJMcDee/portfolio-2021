import styled from "styled-components";
import bgImage from "../img/bg-purple-abstract.jpg";
import { HeaderH2, HeaderH1 } from "./elements/Headers";

function Header() {
  return (
    <HeaderDiv>
      <HoldText>
        <HeaderH1 className="fade-in">Anna McDougall</HeaderH1>
        <HeaderH2 className="typing-demo">Full-Stack Web Developer</HeaderH2>
      </HoldText>

      <LinkBox>
        <LinkBoxLink href="#AboutMe">About</LinkBoxLink>
        <LinkBoxLink href="#TechStack">Tech Stack</LinkBoxLink>
        <LinkBoxLink href="#ProjectShowcase">Projects</LinkBoxLink>
        <LinkBoxLink href="#SocialFeed">Social Feed</LinkBoxLink>
        <LinkBoxLink href="#ContactForm">Contact</LinkBoxLink>

        <LinkBoxLink
          href="http://www.linkedin.com/in/annajmcdougall"
          target="_blank"
        >
          LinkedIn
        </LinkBoxLink>
        <LinkBoxLink href="http://www.github.com/AJMcDee" target="_blank">
          GitHub
        </LinkBoxLink>
      </LinkBox>
    </HeaderDiv>
  );
}

const LinkBoxLink = styled.a`
  padding: 1rem;
  margin: 2px;
  border: 2px solid white;
  background: transparent;
  color: white;
  flex-grow: 1;
  text-align: center;
  font-size: 3rem;
  &:hover {
    color: black;
    background-color: white;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderDiv = styled.header`
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bgImage});
  background-position: center top;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-bottom: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: space-around;
  }
`;

const HoldText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 3vh;
  }
`;

const LinkBox = styled.div`
  margin-top: 1rem;
  min-height: 180px;
  max-width: 30vw;
  min-width: 200px;
  border: 5px solid white;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: black;
  @media (max-width: 1024px) {
    max-width: 80vw;
  }
`;

export default Header;
