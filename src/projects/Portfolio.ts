import Project from "../interfaces/project.interface";

const Portfolio: Project = {
  name: "Portfolio",
  year: 2016,
  month: 9,
  technologies: ["html", "css", "js"].sort(),
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
  longDescription:
    "When I created this to host my work, I had little knowledge about the benefits of ui kits. Bootstrap would have likely made the task easier and more polished, however I had fun trying to come up with my own design.",
  details: [
    {
      name: "Features",
      items: [{ name: "Landing Page" }, { name: "Project Viewer" }],
    },
    {
      name: "Highlights",
      items: [{ name: "GRBR CSS Animations" }],
    },
    {
      name: "Improvements",
      items: [{ name: "UI Kit" }],
    },
  ],
};

export default Portfolio;
