import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const WebGLCL: Project = {
  name: "WebGLCL",
  year: 2016,
  month: 7,
  technologies: ["js", "webgl"].sort(),
  categories: ["graphics", "frontend"],
  repositoryLink: "https://github.com/corbingrbr/web-gl-cl",
  projectLink: "webglcl",
  viewLinks: [
    {
      label: "Try it out!",
      url: "https://jeremyberchtold.com/UnitCellVisualizer/",
    },
    {
      label: "Published Paper",
      url: "https://www.academia.edu/58857824/Interactive_Unit_Cell_Visualization_Tool_for_Crystal_Lattice_Structures?hb-sb-sw=23114651",
    },
  ],
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
  shortDescription: `A rewrite of the ${createLinkOfText(
    "/projects/crystal-lattice",
    "Crystal Lattice"
  )} OpenGL project in WebGL`,
  longDescription: `After I had produced the previous work in C++ and OpenGL, I was having issues making the project accessible to all hardware/os of students/faculty. 
    Partially to alleviate myself of this concern, as well as learn something new, I opted to rewrite the project in javascript and WebGL. 
    This ensured that as long as a person had access to a popular internet browser, they'd have access to this`,
  details: [
    {
      name: "Features",
      items: [
        { name: "Models" },
        { name: "Layering" },
        { name: "Expansion/Contraction Control" },
        { name: "Translucency Toggle" },
      ],
    },
    {
      name: "Highlights",
      items: [{ name: "Journal of Chemical Education" }],
    },
    {
      name: "Improvements",
      items: [{ name: "User Interface" }],
    },
  ],
};

export default WebGLCL;
