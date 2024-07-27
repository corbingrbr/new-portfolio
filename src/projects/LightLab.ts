import { DetailTypes } from "../interfaces/detail-section.interface";
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
     A friend of mine in the freshmen dorms, Alex, assisted me with the microelectronic prototyping. 
     After that, I created a webpage to design color patterns. 
     The two put together made a LED pattern glowstick.
     `,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Breadboard Prototype",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `At the time I was hardly a programmer, let alone an microelectronic hacker. However, my friend in the dorms was. 
          He showed me how to wire up a microprocessor, memory, and LED stick on the breadboard. 
          He also wrote a lot of the code to interface with the peripheral hardware. 
          It was magical, and transformed my perspective of all electronic systems around me.`,
            },
          ],
        },
        {
          name: "Design Page",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `After having enough fun hardcoding patterns into the text editor, I decided I needed a more effective means of specifying patterns. 
                    Queue the webpage. 
                    HTML was really the only way I knew how to create a user interface at the time, so that is what I used. 
                    I created a table with eight rows; one row for each led in the stick. 
                    As for the columns, each resembled a timestep. In a box at the top of each, you could specify the number of milliseconds it should last for.
                    You could add or remove columns to accomodate for the length of pattern you wanted to make.
                    This all meant that each cell represented the color an LED would be at that point in the pattern. 
                    You were essentially painting your pattern.
                    Once your pattern was complete, you could generate an array of the colors, which could then be copy pasted into the code and flashed to the memory.
                    `,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Data Transmission",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Ideally I would've liked to have been able to transmit the pattern state to memory from the website itself. 
          I didn't think this was feasible however do to security measures preventing the web from writing memory.
          Since then I've seen phone apps that can transmit to microelectronics via bluetooth. 
          This would have been practical here.`,
            },
          ],
        },
        {
          name: "Stick Chassis",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `It would have been cool to see this project materialize into a useable product. 
          Hobbyist 3D printing hadn't really taken off yet, but had it, I would've been interested in printing a plastic chassis to encase the microelectronics.`,
            },
          ],
        },
      ],
    },
  ],
};

export default LightLab;
