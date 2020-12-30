import styled from "styled-components";
import mongoDb from "../img/mongoDb.png";
import webpackLogo from "../img/webpackLogo.png";
import expressLogo from "../img/expressLogo.png";
import jqueryLogo from "../img/jqueryLogo.png";

import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faNpm,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TechStack({ HeaderH3 }) {
  return (
    <TechStackContainer>
      <HeaderH3 id="TechStack">Tech Stack</HeaderH3>
      <LogoBox>
        <Logo>
          <FontAwesomeIcon title="HTML5 Logo" icon={faHtml5} />
          <p>HTML 5</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="CSS Logo" icon={faCss3} />
          <p>CSS</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="JavaScript Logo" icon={faJsSquare} />
          <p>JavaScript</p>
        </Logo>

        <Logo>
          <FontAwesomeIcon title="NPM Logo" icon={faNpm} />
          <p>NPM</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="React Logo" icon={faReact} />
          <p>React</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="Bootstrap Logo" icon={faBootstrap} />
          <p>Bootstrap</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="Sass Logo" icon={faSass} />
          <p>Sass</p>
        </Logo>
        <Logo>
          <FontAwesomeIcon title="Node.JS Logo" icon={faNodeJs} />
          <p>NodeJS</p>
        </Logo>

        <Logo>
          <img src={expressLogo} alt="Express Logo"></img>
          <p>Express</p>
        </Logo>
        <Logo>
          <img src={mongoDb} alt="MongoDB Logo"></img>
          <p>MongoDB</p>
        </Logo>
        <Logo>
          <img src={webpackLogo} alt="Webpack Logo"></img>
          <p>Webpack</p>
        </Logo>
        <Logo>
          <img src={jqueryLogo} alt="jQuery Logo"></img>
          <p>jQuery</p>
        </Logo>
      </LogoBox>
    </TechStackContainer>
  );
}

const TechStackContainer = styled.div`
  padding: 2rem 0rem 10% 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(#131331, #131331 80%, #20332d);
  @media (max-width: 1000px) { */
  padding: 3rem;
`;

const Logo = styled.div`
  display: flex;
  width: 22%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  svg,
  img {
    margin-bottom: 5px;
    color: white;
    font-size: 4rem;
    height: 4rem;
  }
`;

const LogoBox = styled.div`
  min-height: 200px;
  max-width: 40vw;
  min-width: 200px;
  border: 5px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: black;
  @media (max-width: 1000px) {
    max-width: 90vw;
  }
  margin: 2rem 0;
`;

export default TechStack;
