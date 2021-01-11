import styled from "styled-components";

function ItemLink({ currentItem, ButtonText, animationDisplay }) {
  return (
    <StyledLink href={currentItem.item.url} className={animationDisplay}>
      {ButtonText}
    </StyledLink>
  );
}

const StyledLink = styled.a`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 5px;
  font-size: 1.2rem;
  &:hover {
    background-color: white;
    color: black;
    text-decoration: none;
  }
  &.blink {
    animation: blink 2s linear;
  }
  &.blink2 {
    animation: blink2 2s linear;
  }
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blink2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default ItemLink;
