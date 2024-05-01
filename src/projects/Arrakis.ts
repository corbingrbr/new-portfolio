import Project from "../interfaces/project.interface";

const Arrakis: Project = {
  name: "Arrakis",
  year: 2014,
  month: 0,
  technologies: ["cpp", "opengl"],
  repositoryLink: "",
  projectLink: "arrakis",
  icon: "fas fa-globe-europe",
  images: [
    {
      name: "Arrakis",
      src: "/assets/arrakis/arrakis.png",
      alt: "Arrakis",
    },
  ],
  shortDescription:
    "Rotationary planet design with interesting shader techniques to produce night/day environment.",
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

export default Arrakis;
