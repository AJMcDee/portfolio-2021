import styled from "styled-components";

const HeaderH1 = styled.h1.attrs((props) => ({
  className: props.className,
}))`
  font-family: "Staatliches", sans-serif;
  color: white;
  font-size: 2.3rem;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 0px 3px lime;

  @media (min-width: 360px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 6.5rem;
    -webkit-text-stroke: 2px black;
    text-shadow: 0px 0px 5px lime;
  }
  @media (min-width: 1024) {
    font-size: 8rem;
    padding-bottom: 1rem;
    -webkit-text-stroke: 3px black;
    text-shadow: 0px 0px 7px lime;
  }
`;

const HeaderH2 = styled.h2.attrs((props) => ({
  className: props.className,
}))`
  color: white;
  padding-bottom: 1rem;
  font-size: 3rem;
  text-shadow: 0px 0px 3px aqua;

  @media (min-width: 768px) {
    text-shadow: 0px 0px 4px aqua;

    font-size: 3.5rem;
  }

  // Add CSS typing effect
  &.typing {
    visibility: visible;
    color: white;
    padding-bottom: 0;
    font-size: 1.1rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: "Inconsolatas", "Courier New", monospace; // Inconsolatas = similar font to VSCode default
    text-shadow: 0px 0px 2px black;
    animation: type 3.5s steps(24, end), blink-caret 0.75s step-end infinite;
    @keyframes type {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      50% {
        border-color: transparent;
      }
    }
    @media (min-width: 360px) {
      font-size: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &.hide {
    visibility: hidden;
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
