import styled from "styled-components";

const HeaderH1 = styled.h1.attrs((props) => ({
  className: props.className,
}))`
  font-family: "Staatliches", sans-serif;
  color: white;
  font-size: 3rem;
  -webkit-text-stroke: 3px black;
  text-shadow: 0px 0px 3px black;
  @media (min-width: 768px) {
    font-size: 6.5rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 0px 0px 2px black;
  }
  @media (min-width: 1024) {
    font-size: 8rem;
    padding-bottom: 1rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 0px 0px 2px black;
  }
`;

const HeaderH2 = styled.h2.attrs((props) => ({
  className: props.className,
}))`
  color: white;
  padding-bottom: 1rem;
  font-size: 3rem;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 0px 1px black;
  @media (min-width: 768px) {
    font-size: 3.5rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 0px 0px 3px black;
  }

  &.typing-demo {
    padding-bottom: 0;
    font-size: 1.4rem;
    width: 100%;
    animation-delay: 4s;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace, "Courier New", Courier;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const HeaderH3 = styled.h3`
  color: white;
  font-size: 2rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    -webkit-text-stroke: 1px black;
    text-shadow: 0px 0px 1px black;
  }
`;

export { HeaderH1, HeaderH2, HeaderH3 };
