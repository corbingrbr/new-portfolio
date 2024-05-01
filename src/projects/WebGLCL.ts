import Project from "../interfaces/project.interface";

const WebGLCL: Project = {
  name: "WebGLCL",
  year: 2014,
  month: 0,
  technologies: ["js", "webgl"],
  repositoryLink: "https://github.com/corbingrbr/web-gl-cl",
  projectLink: "webglcl",
  icon: "fas fa-gem",
  images: [
    {
      name: "Simple Crystal",
      src: "/assets/crystal/simple-crystal.png",
      alt: "Simple Crystal",
    },
    {
      name: "Body Crystal",
      src: "/assets/crystal/body-crystal.png",
      alt: "Body Crystal",
    },
    {
      name: "Face Crystal",
      src: "/assets/crystal/face-crystal.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "A rewrite of the 'Crystal Lattice' OpenGL project in WebGL",
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

export default WebGLCL;
