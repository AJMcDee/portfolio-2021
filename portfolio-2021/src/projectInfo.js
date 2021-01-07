import tttPreview from "./img/tic-tac-toe.png";
import bbPreview from "./img/bennys.png";
import portfolioPreview from "./img/portfolio-page.png";
import beatsPreview from "./img/beats.png";

const projectInfo = {
  projects: [
    {
      projectId: 3,
      title: "Portfolio Page",
      projectLink: "https://www.annamcdougall.com",
      githubLink: null,
      image: portfolioPreview,
      description:
        "This website: featuring self-built social carousels and parallax effect.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "npm"],
    },
    {
      projectId: 1,
      title: "Tic-Tac-Toe",
      projectLink: "https://ajmcdee.github.io/TicTacToe/",
      githubLink: "https://github.com/AJMcDee/TicTacToe",
      image: tttPreview,
      description: `A classic Tic-Tac-Toe game with the option of two players or vs the Computer AI. 
        
        This was one of my first JavaScript projects and I programmed the logic entirely alone, using a series of arrays to evaluate the relative positioning of each move.`,
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      projectId: 2,
      title: "Benny's Burger",
      projectLink: "https://ajmcdee.github.io/BennysBurgers-Bootstrap/",
      githubLink: "https://github.com/AJMcDee/BennysBurgers-Bootstrap",
      image: bbPreview,
      description:
        "An example business page for a small burger restaurant, based on a specified design. The goal of this project was to effectively utilise Bootstrap for a whole-page layout, combining it with Sass mix-ins and custom styling to achieve specificity while adding responsiveness in the areas where Bootstrap is limited.",
      stack: ["HTML", "CSS", "Bootstrap", "Sass", "npm"],
    },
    {
      projectId: 4,
      title: "Beats and Waves",
      projectLink: "https://ajmcdee.github.io/react-music-player/",
      githubLink: "https://github.com/AJMcDee/react-music-player",
      image: beatsPreview,
      description:
        "A minimalist music player with a selection of chillhop tracks, built in React with styling in Sass. Recent features include dark mode toggle and 'pulse' animation effect when a song is playing",
      stack: ["HTML", "Sass", "JavaScript", "React", "npm"],
    },
  ],
};

export default projectInfo;
