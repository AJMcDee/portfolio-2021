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
            src="https://www.youtube.com/embed/FWpXa9sVFzw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AboutVideo>
        <AboutInfo>
          <AboutText>
            <p>
              I am a passionate, high-energy, and friendly developer who was
              born in Austraila but has lived in Germany since 2015. From asking
              for a "poota" as a toddler and learning HTML at age 8, to working
              in digital marketing and now software engineering, I have always
              been fascinated by technology.
            </p>
            <p>
              In 2021, I began my career in software engineering just one year
              after deciding to change careers into tech. In addition to my
              corporate work, I also spent 7 years as a professional opera
              singer, performing on stages around the world. It is my belief
              that being an opera singer prepared me for a programming career,
              and I have written and spoken often about this unusual transition.
            </p>

            <p>
              To this day, I still love being on stage. Nowadays, that stage
              tends to be based on podcasts, conferences, bootcamp speaker
              sessions, and blogs. I love being able to use my stage abilities
              to talk about technology and programming in a passionate and
              motivating way.
            </p>
            <p>
              Interested in having me talk at your event? Please fill out the{" "}
              <a href="#ContactForm">Contact Form</a>.
            </p>
          </AboutText>
        </AboutInfo>
      </AboutBox>
    </AboutMain>
  );
}

const AboutBox = styled.div`
  box-shadow: 0px 0px 5px fuchsia;

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

export default AboutMe;
