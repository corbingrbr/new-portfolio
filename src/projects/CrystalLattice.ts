import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const CrystalLattice: Project = {
  name: "Crystal Lattice",
  year: 2016,
  month: 3,
  technologies: ["cpp", "opengl"].sort(),
  categories: ["graphics"],
  repositoryLink: "https://github.com/corbingrbr/CrystalLattice",
  projectLink: "crystal-lattice",
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
  shortDescription:
    "An interactive visualization of three crystal lattice structures for the Cal Poly Chemistry Department.",
  longDescription: `This was my second project commissioned by the Cal Poly Chemistry Department and also my college capstone project. 
                    I was to produce a visualization of three different crystal lattice structures: 'Simple', 'Body-Centered', and 'Face-Centered'.
                    Each crystal structure was to receive several perspectives: 'Layering', 'Unit Cell', and 'Composite'. 
                    This project was a success, however I ended up translating it to javascript and webgl to improve its audience reach in my project ${createLinkOfText(
                      "/projects/webglcl",
                      "WebGLCL"
                    )}`,
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
      items: [{ name: "Published Paper" }],
    },
    {
      name: "Improvements",
      items: [{ name: "User Interface" }],
    },
  ],
};

export default CrystalLattice;
