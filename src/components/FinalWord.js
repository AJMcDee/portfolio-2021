import styled from "styled-components";

function FinalWord() {
  return <StyledText>Designed and Coded by © Anna McDougall 2021</StyledText>;
}

const StyledText = styled.section`
  font-size: 1.1rem;
  color: white;
  padding: 3rem;
  align-self: center;
  text-align: center;
  text-shadow: 0px 0px 4px black;
  width: 100%;
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export default FinalWord;
