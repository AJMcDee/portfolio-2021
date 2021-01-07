import tttPreview from "./img/projects/tic-tac-toe.png";
import bbPreview from "./img/projects/bennys.png";
import portfolioPreview from "./img/projects/portfolio-page.png";
import beatsPreview from "./img/projects/beats.png";
import tttPreviewPortrait from "./img/projects/tic-tac-toePortrait.png";
import bbPreviewPortrait from "./img/projects/bennysPortrait.png";
import portfolioPreviewPortrait from "./img/projects/portfolio-pagePortrait.png";
import beatsPreviewPortrait from "./img/projects/beatsPortrait.png";

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
      projectId: 1,
      title: "Tic-Tac-Toe",
      projectLink: "https://ajmcdee.github.io/TicTacToe/",
      githubLink: "https://github.com/AJMcDee/TicTacToe",
      imageLandscape: tttPreview,
      imagePortrait: tttPreviewPortrait,
      description: `A classic Tic-Tac-Toe game with the option of two players or vs the Computer AI. 
        
        This was one of my first JavaScript projects and I programmed the logic entirely alone, using a series of arrays to evaluate the relative positioning of each move.`,
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      projectId: 2,
      title: "Benny's Burger",
      projectLink: "https://ajmcdee.github.io/BennysBurgers-Bootstrap/",
      githubLink: "https://github.com/AJMcDee/BennysBurgers-Bootstrap",
      imageLandscape: bbPreview,
      imagePortrait: bbPreviewPortrait,
      description:
        "An example business page for a small burger restaurant, based on a specified design. The goal of this project was to effectively utilise Bootstrap for a whole-page layout, combining it with Sass mix-ins and custom styling to achieve specificity while adding responsiveness in the areas where Bootstrap is limited.",
      stack: ["HTML", "CSS", "Bootstrap", "Sass", "npm"],
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
  ],
};

export default projectInfo;
