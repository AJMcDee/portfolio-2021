import React from "react";
import styled from "styled-components";

function Projects({ HeaderH3 }) {
  return (
    <ProjectsContainer>
      <HeaderH3 id="ContactForm">Project Showcase</HeaderH3>
      <ProjectCardBox></ProjectCardBox>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.section`
  padding: 3rem 0;
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

// Ensure main CSS (not section styling)  matches the SocialFeedBox from SocialFeed component
const ProjectCardBox = styled.div`
  min-height: 200px;
  min-width: 50vw;
  max-width: 80vw;
  min-width: 200px;
  border: 5px solid white;
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

export default Projects;
