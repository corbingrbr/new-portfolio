import Project from "../interfaces/project.interface";

const Obj2Spring: Project = {
  name: "Obj2Spring",
  year: 2016,
  month: 3,
  technologies: ["cpp", "opengl"].sort(),
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
        { name: "Object File Reader" },
        { name: "Object Minifier" },
        { name: "Spring System" },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Spring Formula",
          additional: [
            {
              type: "text",
              content: `This was probably one of the few projects I've created where physics is custom coded in.
      Utilizing Hooke's Law, the force is calculated from the prior timestep's distance. 
      From the force we can then find the velocity, and from the velocity we find the next position.`,
            },
            {
              type: "code",
              language: "typescript",
              content: "const calculateForce = (x: number) => k * x",
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
              type: "text",
              content: `I should've realized that this project idea was in fact two project ideas in one: A spring system simulation, and an obj minifier. 
            Had I had this foresight I'd probably would have chewed off less. 
            The obj minification was more challenging than I had expected and only worked for cubes at submission.`,
            },
          ],
        },
      ],
    },
  ],
};

export default Obj2Spring;
