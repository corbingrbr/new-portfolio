import Project from "../interfaces/project.interface";

const MatchThree: Project = {
  name: "Match Three",
  year: 2021,
  month: 0,
  technologies: ["js", "webgl", "threejs", "gsap"],
  repositoryLink: "",
  projectLink: "match-three",
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
    "Interactive visualization of three crystal lattice structures.",
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

export default MatchThree;
