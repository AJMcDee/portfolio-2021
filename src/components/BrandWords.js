import styled from "styled-components";

function BrandWords() {
  return (
    <StyledEQH>
      <span id="energetic">Energetic. </span>
      <span id="quirky">Quirky. </span>
      <span id="friendly">Friendly. </span>
    </StyledEQH>
  );
}

const StyledEQH = styled.p`
  padding-top: 1rem;
  * {
    font-family: "Staatliches", sans-serif;
    font-size: 2.1rem;
  }
  #energetic {
    text-shadow: 0px 0px 5px yellow;
  }
  #quirky {
    text-shadow: 0px 0px 5px aqua;
  }
  #friendly {
    text-shadow: 0px 0px 5px fuchsia;
  }
`;

export default BrandWords;
