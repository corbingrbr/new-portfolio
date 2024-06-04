import Project from "../interfaces/project.interface";

const MatchThreeRetyped: Project = {
  name: "Match Three Retyped",
  year: 2023,
  month: 0,
  technologies: ["ts", "jest", "webgl", "threejs", "react", "gsap", "tailwind"],
  repositoryLink: "",
  projectLink: "match-three-retyped",
  viewLinks: [{ label: "Play Game", url: "" }],
  icon: "fas fa-th",
  images: [
    {
      name: "Match Three Game 1",
      src: "/assets/matchthree/matchthree.png",
      alt: "Body Crystal",
    },
    {
      name: "Match Three Game 2",
      src: "/assets/matchthree/matchthree2.png",
      alt: "Face Crystal",
    },

    {
      name: "Match Three Game 3",
      src: "/assets/matchthree/matchthree4.png",
      alt: "Body Crystal",
    },
    {
      name: "Match Three Game 4",
      src: "/assets/matchthree/matchthree6.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "A rewrite of the <a href='/projects/match-three' class='font font-bold text-indigo-600 hover:text-indigo-700 no-underline hover:underline'>Match Three</a> game.",
  longDescription: `I'd been learning about the benefits of functional programming 
                    and figured this project could benefit from it. Armed with typescript, fp-ts, and jest, 
                    I went back and retyped my old code using a TDD approach. The experience was therapeutic. At the end I had a solid board management library.
                    However, I still had the final hurdle of rendering to solve. 
                    I'd found an example by pmnd.rs utilizing the react-three-fiber library that I'd found insightful. 
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
