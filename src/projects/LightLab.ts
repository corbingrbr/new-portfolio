import Project from "../interfaces/project.interface";

const LightLab: Project = {
  name: "LightLab",
  year: 2013,
  month: 0,
  technologies: ["html", "css", "jquery", "js", "c", "cpp", "adafruit"],
  repositoryLink: "https://github.com/corbingrbr/LightLab",
  projectLink: "light-lab",
  icon: "fas fa-traffic-light",
  images: [
    {
      name: "Image 1",
      src: "/assets/lightlab/lightlab3.png",
      alt: "Image 1",
    },
    {
      name: "Image 2",
      src: "/assets/lightlab/lightlab.jpg",
      alt: "Image 2",
    },
    {
      name: "Image 3",
      src: "/assets/lightlab/lightlab2.jpg",
      alt: "Image 3",
    },
  ],
  shortDescription:
    "A micro-electronic LED prototype with web page for lighting sequence design.",
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

export default LightLab;
