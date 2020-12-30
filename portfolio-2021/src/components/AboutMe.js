import styled from "styled-components";
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe({ HeaderH3 }) {
  return (
    <AboutMain id="AboutMe">
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
        <HeaderH3>About Me</HeaderH3>{" "}
        <AboutText>
          <p>
            I am a passionate, high-energy, and friendly developer who was born
            in Austraila but has lived in Germany since 2015. I speak German at
            a business-fluent level (approx. C1) and Spanish at an
            upper-intermediate (approx. B2) level.
          </p>
          <p>
            In Australia, I worked for over six years in the fields of Project
            Management and Digital Marketing. In 2021, I will graduate from a
            one-year German government-certified course (Weiterentwicklung) in
            Full-Stack Web Development, and will be looking for my first
            full-time position in web development. I am both a student and tutor
            in the course, helping my classmates to achieve the best possible
            results and alleviating confusion over JavaScript concepts.
            Motivating others drives me to improve myself, and I work hard to
            lift my teammates up while pursuing personal excellence.
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
      </AboutInfo>
    </AboutMain>
  );
}

const AboutMain = styled.main`
  padding: 3rem 0;
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const AboutInfo = styled.div`
  padding: 0 4rem 0 2rem;
  width: 40vw;

  @media (max-width: 768px) {
    padding: 0 1rem;
    width: 90vw;
  }
`;

const AboutText = styled.p`
  padding: 2rem 0;
`;
const AboutVideo = styled.div`
  text-align: center;

  iframe {
    width: 500px;
    height: 360px;
    @media (max-width: 768px) {
      width: 360px;
      height: 200px;
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
  font-size: 3rem;
  a {
    margin: 10px;
    color: white;
  }

  svg:hover {
    color: #be93fc;
    cursor: pointer;
  }
`;

export default AboutMe;
