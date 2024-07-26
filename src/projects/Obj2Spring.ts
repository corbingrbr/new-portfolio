import Project from "../interfaces/project.interface";
import { DetailTypes } from "../interfaces/detail-section.interface";

const Obj2Spring: Project = {
  name: "Obj2Spring",
  year: 2016,
  month: 3,
  technologies: ["cpp", "opengl"].sort(),
  categories: ["graphics"],
  repositoryLink: "https://github.com/corbingrbr/Obj2SpringSystem",
  projectLink: "obj2spring",
  viewLinks: [],
  icon: "fab fa-connectdevelop",
  images: [
    {
      name: "Box Spring Animation",
      src: "/assets/obj2spring/cropped-spring.gif",
      alt: "Box Spring Animation",
    },
  ],
  shortDescription:
    "A visualization of spring systems derived from a supplied obj file",
  longDescription: `This project was for a Computer Animation course at Cal Poly. 
                    We were to incorporate the recent course material on springs into something of our choice. 
                    I wanted to create a simulation which would intake a supplied obj file model 
                    and render it as a set of points connected by springs.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Object File Reader",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was already a utility we had at our disposal from other projects. 
              I was leveraging it here to get access to obj file data when attempting the minification process as well as when producing the spring systems.
              `,
            },
          ],
        },
        {
          name: "Object Minifier",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was supposed to receive a supplied obj, and then reduce the amount of points in it while still retaining its general shape. 
              The goal here was to improve the performance while simulating complex shapes.
              `,
            },
          ],
        },
        {
          name: "Spring System",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The spring system was constructed by establishing a spring between each point in a provided set of points. 
              Then by utilizing the spring formula like discussed below, the joined points positions could be simulated for every timestep.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Spring Formula",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This probably one of the only projects I've written thats emphasis is that of the physics. 
              Using Hookes Law, I wrote code to simulate a group of points that are joined together by springs.
              `,
            },
            {
              type: DetailTypes.CODE,
              language: "typescript",
              content: "const calculateForce = (x: number) => k * x",
            },
            {
              type: DetailTypes.TEXT,
              content: `For each timestep you calculate the force by using the distance between two points in the prior timestep. 
              You can then use that force to update the velocity. 
              Lastly, you add the velocity to the point's previous position and you have its new position.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Object Minifier",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I should've realized that this project idea was two project ideas in one: A spring system simulation, and an obj minifier. 
            Had I known better I'd probably would have chewed off less. 
            The obj minification was more challenging than I had expected and only worked for cubes at submission.`,
            },
          ],
        },
      ],
    },
  ],
};

export default Obj2Spring;
