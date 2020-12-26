import Navigation from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import styled from 'styled-components'
import ContactForm from './components/Contact'

// Universal Styling

const LinkBoxLink = styled.a`
  padding: 2px;
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
  color: white;
  font-size: 6rem;

  -webkit-text-stroke: 3px black;
  text-shadow: 0px 0px 3px black;
  @media (max-width: 768px) {
    font-size: 3rem;

    -webkit-text-stroke: 1px black;
    text-shadow: 0px 0px 1px black;
  }
`;

const HeaderH2 = styled.h2`
  color: white;
  font-size: 3.5rem;
  -webkit-text-stroke: 2px black;
  text-shadow: 0px 0px 3px black;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    -webkit-text-stroke: 1px black;
    text-shadow: 0px 0px 1px black;
  }
`;

const HeaderH3 = styled.h3`
  color: white;
  font-size: 2rem;
`;



function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Header
        LinkBoxLink={LinkBoxLink}
        HeaderH1={HeaderH1}
        HeaderH2={HeaderH2}
      />
      <AboutMe HeaderH3={HeaderH3} />
      <TechStack HeaderH3={HeaderH3} />
      <ContactForm HeaderH3={HeaderH3} />
      {/* <Projects />
      <BlogFeed /> */}
    </div>
  );
}

export default App;
