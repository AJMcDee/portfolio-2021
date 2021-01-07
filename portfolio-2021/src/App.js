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
// - Create Project Card component
// - Add 3 projects
// - Fix social media cards on x-small devices
// - Update navigation links (both in header and navbar)
// - Clean up styling (ensure consistency)
// - Reorder imports to make sense
// - Remove console logs
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
  padding-bottom: 5rem;
`;
export default App;
