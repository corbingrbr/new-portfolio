import Project from "../interfaces/project.interface";

const Arrakis: Project = {
  name: "Arrakis",
  year: 2014,
  month: 0,
  technologies: ["cpp", "opengl"],
  repositoryLink: "",
  projectLink: "arrakis",
  viewLinks: [],
  icon: "fas fa-globe-europe",
  images: [
    {
      name: "Arrakis",
      src: "/assets/arrakis/optimized-arrakis.gif",
      alt: "Arrakis",
    },
  ],
  shortDescription:
    "Rotationary planet design with interesting shader techniques to produce night/day environment.",
  longDescription: `This was one of the first self directed projects I produced in a graphics course at Cal Poly. 
                    The goal was to employ the previous learned techniques involving the composition of transformation matrices and vertex/fragment shaders. 
                    I chose to create a planet with a randomized distribution of buildings and clouds with a day/night scheme.
  `,
  details: [
    {
      name: "Features",
      items: [
        { name: "Clouds and Buildings" },
        { name: "Day and Night Scheme" },
      ],
    },
  ],
};

export default Arrakis;
