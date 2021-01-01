import React from "react";
import styled from "styled-components";
import { HeaderH2 } from "./elements/Headers";
import ProjectCard from "./ProjectCard";
import projectInfo from "../projectInfo";

function Projects() {
  return (
    <ProjectsContainer>
      <HeaderH2 id="ContactForm">Project Showcase</HeaderH2>

      {projectInfo.projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            projectLink={project.projectLink}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
          />
        );
      })}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.section`
  padding: 3rem 0;
  box-shadow: 0px 0px 30px #b87700;
  background-color: #131529;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

// Ensure main CSS (not section styling)  matches the SocialFeedBox from SocialFeed component

export default Projects;
