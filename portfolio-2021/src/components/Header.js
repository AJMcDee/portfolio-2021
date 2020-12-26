import styled from 'styled-components'
import bgImage from '../img/bg-purple-abstract.jpg'

function Header ({LinkBoxLink, HeaderH1, HeaderH2}) {
    return (
      <HeaderDiv className="row">
        <HoldText className="col-12 col-lg-5">

          <HeaderH1>Anna McDougall</HeaderH1>
          <HeaderH2>Full-Stack Web Developer</HeaderH2>
        </HoldText>

        <LinkBox>
          <LinkBoxLink href="#AboutMe">About</LinkBoxLink>
          <LinkBoxLink href="">Contact</LinkBoxLink>
          <LinkBoxLink href="#TechStack">Tech Stack</LinkBoxLink>
          <LinkBoxLink href="">Projects</LinkBoxLink>
          <LinkBoxLink href="http://www.linkedin.com/in/annajmcdougall" target="_blank">LinkedIn</LinkBoxLink>
          <LinkBoxLink href="">Blog Feed</LinkBoxLink>
          <LinkBoxLink href="http://www.github.com/AJMcDee" target="_blank">GitHub</LinkBoxLink>

          <LinkBoxLink href="">YouTube</LinkBoxLink>
        </LinkBox>
      </HeaderDiv>);
}

const HeaderDiv = styled.header`
  /* background-image: url(${bgImage}); */
  background-size: cover;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5) 70%,
      #20332d
    ),
    url(${bgImage});
  background-position: center top;
  min-height: 110vh;
  padding-bottom: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    text-align: center;
    justify-content: center;
    align-items: space-around;
  }
`;

const HoldText = styled.div`
display: flex;
flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
`;



const LinkBox = styled.div`
    min-height: 200px;
    max-width: 30vw;
    min-width: 200px;
    border: 5px solid white;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    background: black;
@media (max-width: 1000px) {
    max-width: 80vw;
}
`



export default Header
