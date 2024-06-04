import Project from "../interfaces/project.interface";

const MatchThree: Project = {
  name: "Match Three",
  year: 2021,
  month: 8,
  technologies: ["js", "webgl", "threejs", "gsap"],
  repositoryLink: "",
  projectLink: "match-three",
  viewLinks: [],
  icon: "fas fa-th",
  images: [
    {
      name: "Prototype",
      src: "/assets/matchthree/matchthree0.jpg",
      alt: "Simple Crystal",
    },
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
    "A simple item grouping game exploring Three.js graphic development.",
  longDescription: `I had recently taken the three.js course offered by Bruno Simon at three.xyz, 
      and was looking for a concept to apply my learnings. A match three game seemed simple enough, 
      however it would require destroying/creating meshes which isn't common in most of the examples featured online. 
      I built the basic game loop, however a pesky bug would appear every now which would ruin the board structure. 
      I had a difficult time identifying if the bug belonged the animation portion, or my underlying board logic. 
      Due to this, I decided to start over with 
      <a href='/projects//match-three-retyped' class='font font-bold text-indigo-600 hover:text-indigo-700 no-underline hover:underline'>Match Three Retyped</a>.`,
  details: [
    {
      name: "Features",
      items: [
        { name: "Game Flow" },
        { name: "GSAP Animations" },
        { name: "Group Identification" },
        { name: "Board Item Alpha Masks" },
      ],
    },
    {
      name: "Highlights",
      items: [{ name: "Recursive Game Loop" }],
    },
    {
      name: "Improvements",
      items: [{ name: "Bug" }],
    },
  ],
};

export default MatchThree;
