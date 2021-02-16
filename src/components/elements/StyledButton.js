import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
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
`;

export default StyledButton;
