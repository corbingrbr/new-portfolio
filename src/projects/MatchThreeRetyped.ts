import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const MatchThreeRetyped: Project = {
  name: "Match Three Retyped",
  year: 2023,
  month: 0,
  technologies: ["ts", "jest", "webgl", "threejs", "react", "tailwind"].sort(),
  categories: ["graphics", "frontend", "testing"],
  repositoryLink: "",
  projectLink: "match-three-retyped",
  viewLinks: [{ label: "Play Game", url: "" }],
  icon: "fa-duotone fa-grid-round-5",
  images: [
    {
      name: "Match Three Game",
      src: "/assets/match-three-retyped/match-three-clip.gif",
      alt: "Match Three Game",
    },
  ],
  shortDescription: `A rewrite of the ${createLinkOfText(
    "/projects/match-three",
    "Match Three"
  )} game.`,
  longDescription: `I'd been learning about the benefits of functional programming 
                    and figured this project could benefit from it. Armed with typescript, fp-ts, and jest, 
                    I went back and retyped my old code using a TDD approach. The experience was therapeutic. At the end I had a solid board management library.
                    However, I still had the final hurdle of rendering to solve. 
                    I'd found an ${createLinkOfText(
                      "https://codesandbox.io/p/sandbox/space-game-i2160?",
                      "example"
                    )} by ${createLinkOfText(
    "https://pmnd.rs/",
    "pmnd.rs"
  )} utilizing the react-three-fiber library that I found insightful. 
                    It presented an organized means of scaling actions and state management through the use of a store.`,
  details: [
    {
      name: "Features",
      items: [{ name: "Board Library" }, { name: "Store" }, { name: "Tests" }],
    },
    {
      name: "Highlights",
      items: [{ name: "Modularity" }],
    },
    {
      name: "Improvements",
      items: [{ name: "Effects" }, { name: "Game Complexity" }],
    },
  ],
};

export default MatchThreeRetyped;
