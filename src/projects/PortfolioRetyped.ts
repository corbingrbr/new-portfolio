import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";
import { DetailTypes } from "../interfaces/detail-section.interface";

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
      src: "/assets/portfolio-retyped/portfolio.gif",
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
      I initally considered creating the journal in 3D using three.js, however in my assessment and planning
      I came across these two css solutions ${createLinkOfText(
        "https://codepen.io/oliviale/pen/bLYQQE",
        "here"
      )} and ${createLinkOfText(
    "https://codepen.io/dhanishgajjar/pen/bjaYYo",
    "here"
  )}. 
      The notebook animation on my site is the product of merging those two concepts. 
      I am extremely happy about the result!`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Notebook Animation",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `My concern for a 2D css approach was the ability to create a sense of depth. 
                The use of multiple pages per side with differing sizes and shading produced a convincing enough 3D effect for me consider it over an actual 3D implementation. 
                The page animation was already solved by the examples I'd found online, however I did encounter an issue once I attempted to put content on the pages. 
                The left page was appearing backwards after the page rotation. 
                To correct it, another rotation on the page content itself needed to be conducted.`,
            },
          ],
        },
        {
          name: "Project Data Structure",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Each project in this portfolio could have had its own unique react component. 
              This would have provided greater customization for each project displayed. 
              However, I felt there should be a separation between data and its render. 
              I instead baked the customization and complexity into an data interface in order to leverage the reuseability that components can provide. 
              My portfolio and its code has more structure as a result, which is a good thing.`,
            },
          ],
        },
        {
          name: "Technology Badges and Icons",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I wanted to feature technologies used in a project like a badge of achievement, something akin to a boyscout badge. 
              This is partly to encourage myself to reach out of my comfort zone and experience new design philosophies.
              For a developer, a list of technologies can often silohuette the structure a project may have before looking at any code. 
              I enjoy this gained perspective when reminiscing on past projects.`,
            },
          ],
        },
        {
          name: "Project Filter",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I wanted to use the already listed technologies as a means of filtering projects. 
              This was easy enough, however once I included my artwork tab, I wanted to leverage it for those works as well. 
              I went back and added greater flexibility to the filter component to accommodate.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Notebook Animation",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I still get so excited to see it.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "View Adaptability",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The notebook layout came with a cost. 
              The aspect ratio of the notebook design just doesn't translate all too well to viewports lacking width, such as mobile. 
              This is something I am just willing to accept.`,
            },
          ],
        },
      ],
    },
  ],
};

export default PortfolioRetyped;
