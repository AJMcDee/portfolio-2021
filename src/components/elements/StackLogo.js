// Tech Stack Logos
import mongoDb from "../../img/logos/mongoDb.png";
import webpackLogo from "../../img/logos/webpackLogo.png";
import expressLogo from "../../img/logos/expressLogo.png";
import jqueryLogo from "../../img/logos/jqueryLogo.png";
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

// Font Awesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StackLogo({ stack }) {
  switch (stack.toLowerCase()) {
    case "html":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faHtml5} />;
    case "css":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faCss3} />;
    case "javascript":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faJsSquare} />;
    case "react":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faReact} />;
    case "bootstrap":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faBootstrap} />;
    case "npm":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faNpm} />;
    case "sass":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faSass} />;
    case "nodejs":
      return <FontAwesomeIcon title={`${stack} logo`} icon={faNodeJs} />;
    case "webpack":
      return <img src={webpackLogo} alt={`${stack} logo`} />;
    case "express":
      return <img src={expressLogo} alt={`${stack} logo`} />;
    case "mongodb":
      return <img src={mongoDb} alt={`${stack} logo`} />;
    case "jquery":
      return <img src={jqueryLogo} alt={`${stack} logo`} />;
    default:
      return <></>;
  }
}

export default StackLogo;
