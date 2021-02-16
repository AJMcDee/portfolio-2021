import Navigation from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import styled from "styled-components";
import ContactForm from "./components/Contact";
import SocialFeed from "./components/SocialFeed";
import bgImage from "./img/bg-purple-abstract.jpg";
import Projects from "./components/Projects";
import projectInfo from "./projectInfo";
import Showcase from "./components/Showcase";
import FinalWord from "./components/FinalWord";
import speakingInfo from "./speakingInfo";

function App() {
  return (
    <AppContainer className="App" id="top">
      <Navigation />
      <Header />
      <AboutMe id="AboutMe" />

      {/* <TechStack id="TechStack" /> */}

      {/* // Below showcase for portfolio projects
      <Showcase
        showcaseTitle="Project Showcase"
        showcaseInfo={projectInfo.projects}
      /> */}
      <Showcase
        showcaseTitle="Speaking Showcase"
        showcaseInfo={speakingInfo.engagements}
        id="SpeakingShowcase"
      />
      <SocialFeed id="SocialFeed" />
      <ContactForm id="ContactForm" />
      <FinalWord />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5) 25%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${bgImage});
  background-repeat: repeat-y;
  background-attachment: fixed;

  & > section:nth-child(odd) {
    box-shadow: 0px 0px 30px #b87700;
    background-color: #131529;
  }
`;

export default App;
