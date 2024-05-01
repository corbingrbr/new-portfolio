import Project from "../interfaces/project.interface";

const MatchThreeRetyped: Project = {
  name: "Match Three Retyped",
  year: 2023,
  month: 0,
  technologies: ["ts", "jest", "webgl", "threejs", "react", "gsap"],
  repositoryLink: "",
  projectLink: "match-three-retyped",
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
    "A rewrite of the 'Match Three' game in typescript with improvements.",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: ["Feature One", "Feature Two"],
    },
    {
      name: "Highlights",
      items: ["Highlights One", "Highlights Two"],
    },
    {
      name: "Improvements",
      items: ["Improvement One", "Improvement Two"],
    },
  ],
};

export default MatchThreeRetyped;
