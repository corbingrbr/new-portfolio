import Project from "../interfaces/project.interface";

const Obj2Spring: Project = {
  name: "Obj2Spring",
  year: 2014,
  month: 0,
  technologies: ["cpp", "opengl"],
  repositoryLink: "https://github.com/corbingrbr/Obj2SpringSystem",
  projectLink: "obj2spring",
  icon: "fab fa-connectdevelop",
  images: [
    {
      name: "Box Spring Animation",
      src: "/assets/obj2spring/cropped-spring.gif",
      alt: "Box Spring Animation",
    },
  ],
  shortDescription:
    "A visualization of spring systems derived from supplied obj files",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: ["Feature One", "Feature Two"],
    },
    {
      name: "Highlights",
      items: ["Highlights One", "Highlights Two"],
    },
    {
      name: "Improvements",
      items: ["Improvement One", "Improvement Two"],
    },
  ],
};

export default Obj2Spring;
