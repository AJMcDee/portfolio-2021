import React from "react";
import styled from "styled-components";
import { HeaderH2 } from "./elements/Headers";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <ProjectsContainer>
      <HeaderH2 id="ContactForm">Project Showcase</HeaderH2>

      <ProjectCard
        title="Test Project"
        projectLink="http://www.google.com"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tb_1ZR-M--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/690735yujtzn5a6e33sk.jpg"
        description="Closure: it's not only what you need when a relationship ends, it's also something you need to understand when coding in JavaScript. Unfortunately, it can be a tough thing to explain to those new to programming, and since I only recently feel like closure has 'clicked' for me, I've decided to write a short article to explain it in ways other newer coders can understand. I hope this helps someone out there!"
        githubLink="http://www.google.com"
      />
      <ProjectCard
        title="Test Project"
        projectLink="http://www.google.com"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tb_1ZR-M--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/690735yujtzn5a6e33sk.jpg"
        description="Closure: it's not only what you need when a relationship ends, it's also something you need to understand when coding in JavaScript. Unfortunately, it can be a tough thing to explain to those new to programming, and since I only recently feel like closure has 'clicked' for me, I've decided to write a short article to explain it in ways other newer coders can understand. I hope this helps someone out there!"
        githubLink="http://www.google.com"
      />
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.section`
  padding: 3rem 0;
  background-color: #343a40;
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
