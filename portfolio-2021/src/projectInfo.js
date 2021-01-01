import tttPreview from "./img/tic-tac-toe.png";
import lprPreview from "./img/lapiazza.png";
import portfolioPreview from "./img/portfolio-page.png";
import pomodoroPreview from "./img/pomodoro.png";

const projectInfo = {
  projects: [
    {
      projectId: 1,
      title: "Tic-Tac-Toe",
      projectLink: "https://ajmcdee.github.io/TicTacToe/",
      githubLink: "https://github.com/AJMcDee/TicTacToe",
      image: tttPreview,
      description:
        "A classic Tic-Tac-Toe game with the option of two players or vs the Computer AI.",
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      projectId: 2,
      title: "La Piazza Restaurant",
      projectLink: "https://ajmcdee.github.io/restaurantReactRefactor/",
      githubLink: "https://github.com/AJMcDee/restaurantReactRefactor",
      image: lprPreview,
      description:
        "A small refactoring project featuring a restaurant landing page, menu, and booking form.",
      stack: ["HTML", "CSS", "JavaScript", "React", "npm"],
    },
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
      projectId: 4,
      title: "Pomodoro Clock",
      projectLink: "https://ajmcdee.github.io/pomodoroClock/",
      githubLink: "https://github.com/AJMcDee/pomodoroClock",
      image: pomodoroPreview,
      description: `Simple Pomodoro Clock with tomato motif and splat sound effect.`,
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ],
};

export default projectInfo;
