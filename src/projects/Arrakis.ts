import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const Arrakis: Project = {
  name: "Arrakis",
  year: 2014,
  month: 0,
  technologies: ["cpp", "opengl"].sort(),
  categories: ["graphics"],
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
        {
          name: "Clouds and Buildings",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `When I first started using arrays and random, there was nothing going to stop me. I loved making generative state. 
              For both the clouds and buildings I generated random sets of positions, scalars, and rotation and plotted the respective objects around the sphere to simulate a planet surface.  `,
            },
          ],
        },
        {
          name: "Day and Night Scheme",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `We had recently learned about shaders and shading techniques in our graphics course and I used this to produce a day and night effect on my planet. 
              The planetary sphere was shaded with phong, however the buildings required a bit more technique. 
              I manipulated the color of the building texture's pixels based on whether it had line of sight to the sun in the scene.
              Determining this was not straightfoward.`,
            },
          ],
        },
      ],
    },
  ],
};

export default Arrakis;
