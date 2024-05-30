import Project from "../interfaces/project.interface";

const Obj2Spring: Project = {
  name: "Obj2Spring",
  year: 2016,
  month: 3,
  technologies: ["cpp", "opengl"],
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
      items: [{ name: "Object File Handler" }, { name: "Spring System" }],
    },
    {
      name: "Highlights",
      items: [{ name: "Spring Formula" }],
    },
    {
      name: "Improvements",
      items: [{ name: "Object File Handler" }],
    },
  ],
};

export default Obj2Spring;
