import portfolioPreview from "./img/projects/portfolio-page.png";
import beatsPreview from "./img/projects/beats.png";
import portfolioPreviewPortrait from "./img/projects/portfolio-pagePortrait.png";
import beatsPreviewPortrait from "./img/projects/beatsPortrait.png";
import ajmPreview from "./img/projects/ajmbanking.png";
import ajmPreviewPortrait from "./img/projects/ajmbankingPortrait.png";

const projectInfo = {
  projects: [
    {
      projectId: 3,
      title: "Portfolio Page",
      projectLink: "https://www.annamcdougall.com",
      githubLink:
        "https://github.com/AJMcDee/portfolio-2021/tree/master/portfolio-2021",
      imageLandscape: portfolioPreview,
      imagePortrait: portfolioPreviewPortrait,
      description:
        "This website: built in React using styled components, and featuring self-built social carousels and parallax effect. Built using functional components only, covering useState, useEffect, and useLayoutEffect hooks.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "npm"],
    },
    {
      projectId: 4,
      title: "Beats and Waves",
      projectLink: "https://ajmcdee.github.io/react-music-player/",
      githubLink: "https://github.com/AJMcDee/react-music-player",
      imageLandscape: beatsPreview,
      imagePortrait: beatsPreviewPortrait,
      description:
        "A minimalist music player with a selection of chillhop tracks, built in React with styling in Sass. Recent features include dark mode toggle and 'pulse' animation effect when a song is playing.",
      stack: ["HTML", "Sass", "JavaScript", "React", "npm"],
    },
    {
      projectId: 5,
      title: "AJM Banking",
      projectLink: "https://ajm-banking.herokuapp.com",
      githubLink: "https://github.com/AJMcDee/AJM-banking",
      imageLandscape: ajmPreview,
      imagePortrait: ajmPreviewPortrait,
      description:
        "A full-stack MERN banking app with simple routing for balance retrieval, deposit, and withdrawal. Design is a clean aesthetic with feature images as backgrounds.",
      stack: ["mongodb", "React", "Express", "Nodejs", "npm"],
    },
  ],
};

export default projectInfo;
