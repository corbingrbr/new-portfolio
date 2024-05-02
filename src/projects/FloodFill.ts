import Project from "../interfaces/project.interface";

const FloodFill: Project = {
  name: "FloodFill",
  year: 2015,
  month: 0,
  technologies: ["cpp", "opengl"],
  repositoryLink: "https://github.com/MatheusFaria/flood-fill",
  projectLink: "flood-fill",
  icon: "fa-light fa-water-arrow-up",
  images: [
    {
      name: "Flood Fill",
      src: "/assets/flood/flood.png",
      alt: "Screenshot of gameplay",
    },
  ],
  shortDescription:
    "A puzzle platformer involving color within a voxel level design.",
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

export default FloodFill;
