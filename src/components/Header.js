import styled from "styled-components";
import bgImage from "../img/bg-purple-abstract.jpg";
import { HeaderH2, HeaderH1 } from "./elements/Headers";
import { useEffect, useState } from "react";
import HeaderInfoBox from "./HeaderInfoBox";

function Header() {
  const [typingActive, setTypingActive] = useState("hide");

  useEffect(() => {
    setTypingActive("typing");
  }, []);

  return (
    <HeaderDiv>
      <HoldText>
        <HeaderH1>Anna McDougall</HeaderH1>
        <HeaderH2 className={typingActive}>Software Engineer</HeaderH2>
      </HoldText>

      <HeaderInfoBox />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  padding-top: 40px;
  background-size: cover;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
`;

const HoldText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 3vh;
  }
  @media (min-width: 1200px) {
    text-align: left;
    align-content: flex-start;
  }
`;

export default Header;
