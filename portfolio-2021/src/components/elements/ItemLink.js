import styled from "styled-components";

function ItemLink({ currentItem, ButtonText }) {
  return <StyledLink href={currentItem.item.url}>{ButtonText}</StyledLink>;
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
`;

export default ItemLink;
