import styled from "styled-components";

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
  padding-bottom: 1rem;
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

export { HeaderH1, HeaderH2, HeaderH3 };
