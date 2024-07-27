import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const Portfolio: Project = {
  name: "Portfolio",
  year: 2016,
  month: 9,
  technologies: ["html", "css", "js"].sort(),
  categories: ["frontend"],
  repositoryLink: "",
  projectLink: "portfolio",
  viewLinks: [],
  icon: "fa-regular fa-briefcase",
  images: [
    {
      name: "Home Page",
      src: "/assets/portfolio/portfolio.gif",
      alt: "Home Page",
    },
    {
      name: "Projects",
      src: "/assets/portfolio/projects.png",
      alt: "Projects",
    },
    {
      name: "Repository Page",
      src: "/assets/portfolio/repository-page.png",
      alt: "Repository Page",
    },
  ],
  shortDescription: "The first site I designed to host my projects.",
  longDescription: `This was an exciting time. 
    I'd finally gotten enough custom projects under my belt to create a portfolio, and I needed one.
    Job fairs were just around the corner, and I wanted to have something to show for my efforts.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Landing Page",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I wanted to create something unique to showcase my work. 
          I wanted to use the letters GRBR, which is my last name stripped of vowels, because it had been part of my email forever (corbingrbr@gmail.com) and it oddly matched a lot of the sections I wanted to have on the site (Graphics, Repository, B-dontaskme, Resume).
          Utilizing jquery and css selectors I went to town adding animation events when hover over these letters which I had placed on the page.
          It would do some weird stuttering at times, however it was design I'd dreamt up and I could call my own.`,
            },
          ],
        },
        {
          name: "Graphics",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was my center stage. 
          A lot of my work fell under this category because I had pursued a degree in computer science with elective courses in graphic development. 
          I liked the fact that graphical work is something that can be shown and immediately appreciated. 
          Having this page of projects improved my confidence when going into interviews because I was able to use it as a convenient talking point with imagery.`,
            },
          ],
        },
        {
          name: "Repository",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I wanted to have a place to list projects that might not fall under the graphics category, or have enough imagery to look nice on the other page. 
          Here I listed all the projects in a table, and when one of the rows was clicked, it would take you to git repo associated. 
          One interesting thing is that I had a column in this table to detail the technologies used in the respective project, which is similar to what I've done for this current portfolio.`,
            },
          ],
        },
        {
          name: "Resume",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I actually used the the same method to embed a pdf into html in my current site as I did here.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "CSS Animation",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I had a vision for that landing page and I went for it.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "UI Kit",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `At the time I was creating this, UI kits were just becoming a thing. 
          I had vaguely heard of bootstrap, and I couldn't really tell you what it was or how to integrate it. 
          Had I known the importance of view adaptability for web pages, I'd likely would have got on the ball there.`,
            },
          ],
        },
      ],
    },
  ],
};

export default Portfolio;
