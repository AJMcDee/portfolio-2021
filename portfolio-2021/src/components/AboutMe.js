import styled from "styled-components";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderH2 } from "./elements/Headers";

function AboutMe() {
  return (
    <AboutMain id="AboutMe">
      <HeaderH2>About Me</HeaderH2>
      <AboutBox>
        <AboutVideo>
          <iframe
            title="aboutVideo"
            src="https://www.youtube.com/embed/wZUtacoX_r8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </AboutVideo>
        <AboutInfo>
          <AboutText>
            <p>
              I am a passionate, high-energy, and friendly developer who was
              born in Austraila but has lived in Germany since 2015. I speak
              German at a business-fluent level (approx. C1) and Spanish at an
              upper-intermediate (approx. B2) level.
            </p>
            <p>
              In Australia, I worked for over six years in the fields of Project
              Management and Digital Marketing. In 2021, I will graduate from a
              one-year German government-certified course (Weiterentwicklung) in
              Full-Stack Web Development, and will be looking for my first
              full-time position in web development. I am both a student and
              tutor in the course, helping my classmates to achieve the best
              possible results and alleviating confusion over JavaScript
              concepts. Motivating others drives me to improve myself, and I
              work hard to lift my teammates up while pursuing personal
              excellence.
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
              href="http://https://www.linkedin.com/in/annajmcdougall/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/AJMcDee"
              target="_blank"
              rel="noreferrer"
            >
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
        </AboutInfo>
      </AboutBox>
    </AboutMain>
  );
}

const AboutBox = styled.div`
  min-height: 200px;
  min-width: 50vw;
  max-width: 80vw;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background: black;
  padding: 2rem;

  @media (min-width: 1200px) {
    max-width: 80vw;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AboutMain = styled.main`
  box-shadow: 0px 0px 30px #b87700;
  padding: 3rem 0;
  background-color: #131529;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
`;

const AboutInfo = styled.div`
  padding: 0 1rem;
  width: 80vw;
  @media (min-width: 1200px) {
    padding: 2rem;
    width: 40vw;
  }
`;

const AboutText = styled.p`
  font-size: 1em;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
const AboutVideo = styled.div`
  text-align: center;

  iframe {
    width: 200px;
    height: 120px;
    @media (min-width: 360px) {
      width: 300px;
      height: 180px;
    }
    @media (min-width: 768px) {
      width: 500px;
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const SocialIcons = styled.div`
  text-align: right;
  height: 100px;
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

export default AboutMe;
