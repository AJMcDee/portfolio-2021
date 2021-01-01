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

function App() {
  return (
    <AppContainer className="App" id="top">
      <Navigation />
      <Header LinkBoxLink={LinkBoxLink} />
      <AboutMe />
      <TechStack />

      <Projects />
      <SocialFeed />
      <ContactForm />
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
