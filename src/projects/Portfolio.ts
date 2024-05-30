import Project from "../interfaces/project.interface";

const Portfolio: Project = {
  name: "Portfolio",
  year: 2016,
  month: 9,
  technologies: ["html", "css", "js"],
  repositoryLink: "",
  projectLink: "portfolio",
  viewLinks: [],
  icon: "fa-regular fa-briefcase",
  images: [
    {
      name: "Home Page",
      src: "/assets/portfolio/home-page.png",
      alt: "Home Page",
    },
    {
      name: "Home Page Interaction",
      src: "/assets/portfolio/home-page-interaction.png",
      alt: "Interaction on Home Page",
    },
    {
      name: "Projects",
      src: "/assets/portfolio/projects.png",
      alt: "Projects",
    },
  ],
  shortDescription: "My first site designed to host my projects.",
  longDescription: "This is this projects loooooooooooong description.",
  details: [
    {
      name: "Features",
      items: [{ name: "" }, { name: "" }],
    },
    {
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },
  ],
};

export default Portfolio;
