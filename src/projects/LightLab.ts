import Project from "../interfaces/project.interface";

const LightLab: Project = {
  name: "LightLab",
  year: 2013,
  month: 0,
  technologies: ["html", "css", "jquery", "js", "c", "cpp", "adafruit"].sort(),
  categories: ["embedded", "frontend", "graphics"],
  repositoryLink: "https://github.com/corbingrbr/LightLab",
  projectLink: "light-lab",
  viewLinks: [{ label: "Watch Video", url: "https://youtu.be/KjPLm4snhxk" }],
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
    "A micro-electronic prototype featuring an LED stick and a web page for lighting sequence design.",
  longDescription: `This project came about from my passion to spin glowsticks/poi. 
     The goal was to make an LED stick display color patterns of your own design. 
     Not much on the market existed for this at the time. 
     A friend of mine in the freshmen dorms, Alex, assisted in the initial hardware peripheral interfacing. 
     After that, I created a webpage to specify the LED color pattern over time. Once a design was made, 
     a data sequence could be generated and set in the program, and finally flashed to the chip`,
  details: [
    {
      name: "Features",
      items: [{ name: "Breadboard Prototype" }, { name: "Design Page" }],
    },
    {
      name: "Improvements",
      items: [
        { name: "Data Transmission" },
        { name: "Stick Chassis" },
        { name: "Design Page" },
      ],
    },
  ],
};

export default LightLab;
