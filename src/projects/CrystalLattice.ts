import { DetailTypes } from "../interfaces/detail-section.interface";
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
      name: "Simple Crystal Animation",
      src: "/assets/crystal/crystallattice.gif",
      alt: "Simple Crystal Animation",
    },
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
        {
          name: "Models",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `To model the unit cells of the crystal lattice I needed to destructure a sphere model into halves, quarters, and eigths. 
          It was my first time in working with blender, and while the task turned out to be rather easy, it was still foreign and took some youtubing.`,
            },
          ],
        },
        {
          name: "Expansion/Contraction Control",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `After making the custom models, I was able to piece together a unit cell. 
          This unit cell was then able to be composited with itself, over and over, to form the larger crystal lattice structure. 
          The whole point of this project was demonstrate this relationship. I decided an effective way to show this would be to provide controls to expand and contract the unit cells. 
          This was a rather simple effect to create, as all it entailed was scaling to the unit cell's position. It turned out really cool!`,
            },
          ],
        },
        {
          name: "Translucency Toggle",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was another effect I added to show how a unit cell is positioned in the interior of a crystal lattice. 
          When toggled, the effect causes the innermost unit cell to be highlighted, while all those that surround it become mostly translucent. 
          This looked awesome, however I vaguely recall it causing me some headache to get there.
          It was something to do with the render order of the unit cells with relation to the camera that caused complication to the translucency. 
          TODO: Find the mathematical wizardry that was employed here to sound cool.`,
            },
          ],
        },
        {
          name: "Layering",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `When a user transitions to the next crystal lattice type, a layering animation begins showing spheres falling and fitting into place above one another. 
          This was a little tricky as it required me to program multiple modes into the experience. One for when rendering unit cells, and another for when showing the layering.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Journal of Chemical Education",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The paper published about this project supposedly ranked highly amongst the other journal submissions. 
          It was exciting to hear that something I had a signifcant hand in had gained an audience like that.`,
            },
          ],
        },
        {
          name: "Passing the Torch",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `When I read the published paper, I found out that other students from Cal Poly had contributed to it. 
              It brings a sense of pride to know I was able to create something that others could build upon.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Accessibility",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I was having issues distributing the experience to students and faculty with apple operating systems. 
              I didn't want this to be a limiting factor on people's ability to access my project, so I decided to rewrite it in WebGL with the hopes I'd be able to leverage the accessibility of the web. 
              It was a success.`,
            },
          ],
        },
      ],
    },
  ],
};

export default CrystalLattice;
