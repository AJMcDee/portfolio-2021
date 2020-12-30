import Navigation from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import styled from "styled-components";
import ContactForm from "./components/Contact";
import SocialFeed from "./components/SocialFeed";
import bgImage from "./img/bg-purple-abstract.jpg";
import Projects from "./components/Projects";

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

const HeaderH1 = styled.h1`
  font-family: "Staatliches", sans-serif;
  color: white;
  font-size: 8rem;
  padding-bottom: 1rem;

  -webkit-text-stroke: 3px black;
  text-shadow: 0px 0px 3px black;
  @media (max-width: 768px) {
    font-size: 6.5rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 0px 0px 2px black;
  }
  @media (max-width: 360px) {
    font-size: 4rem;
    -webkit-text-stroke: 1px black;
    text-shadow: 0px 0px 1px black;
  }
`;

const HeaderH2 = styled.h2`
  color: white;
  font-size: 3.5rem;
  padding: 1rem;
  -webkit-text-stroke: 2px black;
  text-shadow: 0px 0px 3px black;
  @media (max-width: 768px) {
    font-size: 3rem;
    -webkit-text-stroke: 1px black;
    text-shadow: 0px 0px 1px black;
  }
`;

const HeaderH3 = styled.h3`
  color: white;
  font-size: 3rem;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 0px 1px black;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

function App() {
  return (
    <AppContainer className="App" id="top">
      <Navigation />
      <Header
        LinkBoxLink={LinkBoxLink}
        HeaderH1={HeaderH1}
        HeaderH2={HeaderH2}
      />
      <AboutMe HeaderH3={HeaderH3} />
      <TechStack HeaderH3={HeaderH3} />

      <Projects HeaderH3={HeaderH3} />
      <SocialFeed
        HeaderH2={HeaderH2}
        HeaderH3={HeaderH3}
        LinkBoxLink={LinkBoxLink}
      />
      <ContactForm HeaderH3={HeaderH3} />
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
