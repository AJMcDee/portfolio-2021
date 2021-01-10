import styled from "styled-components";
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
              born in Austraila but has lived in Germany since 2015. From asking
              for a "poota" as a toddler and learning HTML at age 8, I have
              always been fascinated with the world of technology.
            </p>
            <p>
              In 2021, I will graduate from a one-year course of study
              (Weiterbildung) in Web- and Software Development from Digital
              Career Institute in Leipzig, Germany. Not only have I excelled
              academically, but I also pride myself in working to lift up the
              other students both through her role as Class Tutor and as Class
              Representative.
            </p>
            <p>
              My skills revolve around the MERN stack: MongoDB, Express, React,
              and Node. Naturally, this comes in addition to strong abilities in
              HTML, CSS, and JavaScript (ECMAScript 6). I speak German at a
              business-fluent level (approx. C1) and Spanish at an
              upper-intermediate (approx. B2) level.
            </p>
            <p>
              In addition to my training and work experience, I also bring an
              unending enthusiasm and passion for technology and JavaScript, as
              well as for lifting up others around me. Not only do I write a
              comprehensive <a href="http://blog.annamcdougall.com">blog</a> on
              relevant technical and workplace topics, but I also produce videos
              on{" "}
              <a href="https://www.youtube.com/channel/UCjJzKrbr3WGn1xE0LAQ91yA">
                my YouTube channel
              </a>
              , mainly aimed at beginners to programming and JavaScript.
            </p>
          </AboutText>
        </AboutInfo>
      </AboutBox>
    </AboutMain>
  );
}

const AboutBox = styled.div`
  min-height: 200px;
  min-width: 50vw;
  max-width: 85vw;
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
  text-align: justify;
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
      width: 290px;
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
