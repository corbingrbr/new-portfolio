import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const PortfolioRetyped: Project = {
  name: "Portfolio Retyped",
  year: 2024,
  month: 5,
  technologies: ["nextjs", "react", "tailwind", "ts"].sort(),
  categories: ["frontend"],
  repositoryLink: "",
  projectLink: "portfolio-retyped",
  viewLinks: [],
  icon: "fa-regular fa-briefcase",
  images: [
    {
      name: "Projects List",
      src: "/assets/portfolio-retyped/projects-list.png",
      alt: "Projects List",
    },
  ],
  shortDescription: `A rewrite of my ${createLinkOfText(
    "/projects/portfolio",
    "Portfolio"
  )} site.`,
  longDescription: `This project is what you are viewing right now. 
      I utilized TailwindUI for most the styling of this as a two pane presentation of content. 
      This perspective inspired me to consider embedding the content in a moleskin notebook visual. 
      I wanted to recreate the feeling of a development journal tracking milestones with badges. 
      First I considered creating the journal in 3D using three.js, however after acknowledging 
      the lack of overlap between the animation required and my skillset, thought otherwise. 
      I then turned my head to css solutions, and found these two codepen examples ${createLinkOfText(
        "https://codepen.io/oliviale/pen/bLYQQE",
        "here"
      )} and ${createLinkOfText(
    "https://codepen.io/dhanishgajjar/pen/bjaYYo",
    "here"
  )}. 
      The notebook animation on my site is the product of merging those. 
      I am extremely happy about the result!`,
  details: [
    {
      name: "Features",
      items: [
        { name: "Notebook Animation" },
        { name: "Project Data Structure" },
        { name: "Technology Badges and Icons" },
        { name: "Project Filter" },
      ],
    },
    {
      name: "Highlights",
      items: [{ name: "Notebook Animation" }],
    },
    {
      name: "Improvements",
      items: [{ name: "View Adaptability" }],
    },
  ],
};

export default PortfolioRetyped;
