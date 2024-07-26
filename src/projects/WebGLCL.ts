import { DetailTypes } from "../interfaces/detail-section.interface";
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
      name: "Face Crystal Animation",
      src: "/assets/crystal/webglcl.gif",
      alt: "Face Crystal Animation",
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
  shortDescription: `A rewrite of the ${createLinkOfText(
    "/projects/crystal-lattice",
    "Crystal Lattice"
  )} OpenGL project in WebGL`,
  longDescription: `After I had produced the previous work in C++ and OpenGL, I was having issues making the project accessible to all hardware/os combinations of the students/faculty. 
    Partially to alleviate myself of this concern, as well as an opportunity learn something new, I opted to rewrite the project in javascript and WebGL. 
    This ensured that as long as a person had access to a popular internet browser, they'd have access to this`,
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
          name: "User Interface",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Having an easy to use and informative UI can go a long way in improving the consumer experience with your product. 
          I feel that the html alert window that I used here, with some key bindings specified in text, does fall a bit short on this.
          I was happy to see that some Cal Poly students who ended up extending this project, improved this aspect.`,
            },
          ],
        },
      ],
    },
  ],
};

export default WebGLCL;
