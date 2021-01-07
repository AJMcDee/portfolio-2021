import styled from "styled-components";
import { HeaderH3 } from "./elements/Headers";
import StyledLink from "./elements/StyledLink";
import StackLogo from "./elements/StackLogo";
import { useLayoutEffect, useState } from "react";

function ProjectCard({
  title,
  projectLink,
  githubLink,
  imagePortrait,
  imageLandscape,
  description,
  stack,
}) {
  // Hook to change project image preview orientation based on screen
  const [image, setImage] = useState(
    window.matchMedia("(min-width: 768px)").matches
      ? imageLandscape
      : imagePortrait
  );

  useLayoutEffect(() => {
    function updateWidth() {
      setImage(window.innerWidth >= 768 ? imageLandscape : imagePortrait);
    }
    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <ProjectCardBox>
      <StyledCard>
        <HeaderH3 style={{ gridArea: "header" }}>{title}</HeaderH3>
        <LogoBox>
          {stack.map((item) => {
            return <StackLogo stack={item} />;
          })}
        </LogoBox>
        <ImageLink href={projectLink} target="_blank" rel="noreferrer">
          <CardImage src={image} />
        </ImageLink>
        <TextBox>
          <p>{description}</p>
          <ButtonBox>
            <StyledLink href={projectLink} target="_blank" rel="noreferrer">
              View Deployment
            </StyledLink>
            <StyledLink href={githubLink} target="_blank" rel="noreferrer">
              View on GitHub
            </StyledLink>
          </ButtonBox>
        </TextBox>
      </StyledCard>
    </ProjectCardBox>
  );
}

const ProjectCardBox = styled.div`
  min-height: 200px;
  min-width: 50vw;
  width: 80vw;
  min-width: 200px;
  border: 5px solid white;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  background: black;
  padding: 2rem;
  img {
    width: 80%;
  }
  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    border: 2px solid white;
    padding: 2rem;
    margin: 1rem;
  }
  @media (max-width: 1024px) {
    max-width: 90vw;
  }
`;

const TextBox = styled.div`
  grid-area: text;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 3;
  h3 {
    margin-top: 0;
    margin-block-start: 0;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const LogoBox = styled.p`
  grid-area: logos;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  * {
    padding: 5px;
    height: 40px;
    font-size: 40px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    margin: 5px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledCard = styled.div`
  width: clamp(300px, 60vw, 80vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 95%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    grid-template-areas:
      "image header"
      "image logos"
      "image text";
    place-items: center;
  }
`;

const ImageLink = styled.a`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CardImage = styled.img`
  border: 2px solid white;
`;

export default ProjectCard;
