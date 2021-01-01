import styled from "styled-components";
import { HeaderH3 } from "./elements/Headers";
import StyledLink from "./elements/StyledLink";

function ProjectCard({ title, projectLink, githubLink, image, description }) {
  return (
    <ProjectCardBox>
      <StyledCard>
        <ImageLink href={projectLink} target="_blank" rel="noreferrer">
          <CardImage src={image} />
        </ImageLink>
        <TextBox>
          <HeaderH3>{title}</HeaderH3>
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
  max-width: 80vw;
  min-width: 200px;
  border: 5px solid white;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  background: black;
  padding: 2rem;
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
  @media (max-width: 1000px) {
    max-width: 90vw;
  }
`;

const TextBox = styled.div`
  margin-top: 0;
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

const ButtonBox = styled.div`
  * {
    margin: 2rem 2rem 2rem 0rem;
  }
`;

const StyledCard = styled.div`
  width: clamp(300px, 60vw, 80vw);
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 300px auto;
  }
`;

const ImageLink = styled.a`
  margin-right: 2rem;
  margin-top: 8px;
`;

const CardImage = styled.img`
  width: 100%;
`;

export default ProjectCard;