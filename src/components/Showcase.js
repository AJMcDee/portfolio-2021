import React from "react";
import styled from "styled-components";
import { HeaderH2 } from "./elements/Headers";
import ProjectCard from "./ProjectCard";

function Showcase({ showcaseTitle, showcaseInfo, id }) {
  return (
    <ProjectsContainer id={id}>
      <HeaderH2>{showcaseTitle}</HeaderH2>

      {showcaseInfo.map((project) => {
        return (
          <ProjectCard
            imageLandscape={project.imageLandscape}
            imagePortrait={project.imagePortrait}
            title={project.title}
            stack={project.stack}
            description={project.description}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            key={project.id}
          />
        );
      })}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.section`
  padding: 3rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Showcase;
