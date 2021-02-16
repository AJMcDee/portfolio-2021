import styled from "styled-components";
import BrandWords from "./BrandWords";
import SocialIcons from "./SocialIcons";

function HeaderInfoBox() {
  return (
    <InfoBox>
      <BrandWords />
      <AboutText>
        <p>
          Anna McDougall is a full-stack developer with a passion for
          JavaScript. She is known as "that dev who used to be an opera singer".
        </p>

        <p>
          In addition to her upcoming position as Junior Software Engineer at{" "}
          <a href="https://www.novatec-gmbh.de/">Novatec Consulting GmbH</a>,
          Anna is also a tech blogger, YouTube creator, and public speaker.
        </p>
      </AboutText>
      <SocialIcons />
    </InfoBox>
  );
}

const InfoBox = styled.div`
  text-align: center;
  margin-top: 1rem;
  min-height: 180px;
  max-width: 85vw;
  min-width: 200px;
  border: 5px solid white;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (min-width: 1024px) {
    max-width: 40vw;
    padding: 20px;
  }
  @-moz-document url-prefix() {
    background: black;
  }
`;

const AboutText = styled.p`
  p {
    font-size: 1em;
    a {
      color: white;
      text-decoration: underline;
    }
    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }
`;

export default HeaderInfoBox;
