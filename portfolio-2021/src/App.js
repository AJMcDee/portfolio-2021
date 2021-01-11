import Navigation from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import styled from "styled-components";
import ContactForm from "./components/Contact";
import SocialFeed from "./components/SocialFeed";
import bgImage from "./img/bg-purple-abstract.jpg";
import Projects from "./components/Projects";

// TODO:
// - Clean up styling (ensure consistency)
// - Reorder imports to make sense
// - Comment code

// Universal Styling

function App() {
  return (
    <AppContainer className="App" id="top">
      <Navigation />
      <Header />
      <AboutMe id="AboutMe" />
      <TechStack id="TechStack" />

      <Projects id="ProjectShowcase" />
      <SocialFeed id="SocialFeed" />
      <ContactForm id="ContactForm" />
      <FinalWord>Designed and Coded by © Anna McDougall 2021</FinalWord>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImage});
  background-repeat: repeat-y;
  background-attachment: fixed;
`;

const FinalWord = styled.p`
  font-size: 1.1rem;
  color: white;
  padding: 3rem;
  align-self: center;
  text-align: center;
  text-shadow: 0px 0px 4px black;
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;
export default App;
