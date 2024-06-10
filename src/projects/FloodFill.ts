import Project from "../interfaces/project.interface";

const FloodFill: Project = {
  name: "FloodFill",
  year: 2015,
  month: 6,
  technologies: ["cpp", "opengl"].sort(),
  categories: ["graphics"],
  repositoryLink: "https://github.com/corbingrbr/flood-fill",
  projectLink: "flood-fill",
  viewLinks: [{ label: "Watch Video", url: "https://youtu.be/hfMVrTvxlYY" }],
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
  longDescription: `This was a group final project for one of my Cal Poly Graphics courses involving myself and three other classmates. 
  The goal was to take a game idea from concept art to demo using the basic OpenGL framework. 
  This was the most complex project I'd worked on up until this point, 
  and it introduced me to how version control works within a team. 
  We tackled separate features and the culmination of efforts produced a final product I was very proud of. Check out the video featuring its gameplay below!`,
  details: [
    {
      name: "Features",
      items: [
        { name: "Concept Art" },
        { name: "Level Design" },
        { name: "Menu Screen" },
        { name: "Flood Mechanism" },
        { name: "Sink Mechanism" },
        { name: "Block Removal" },
        { name: "Lever Mechanism" },
      ],
    },
    /*{
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },*/
  ],
};

export default FloodFill;
