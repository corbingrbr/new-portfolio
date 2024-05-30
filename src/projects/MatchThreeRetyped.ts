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
    "A rewrite of the <a href='/projects/match-three' class='font font-bold text-indigo-600 hover:text-indigo-700 no-underline hover:underline'>Match Three</a> game in typescript with improvements.",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: [{ name: "" }, { name: "" }],
    },
    {
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },
  ],
};

export default MatchThreeRetyped;
