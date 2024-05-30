import Project from "../interfaces/project.interface";

const PortfolioRetyped: Project = {
  name: "Portfolio Retyped",
  year: 2024,
  month: 5,
  technologies: ["nextjs", "react", "tailwind", "ts"],
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
  shortDescription:
    "A rewrite of my <a href='/projects/portfolio' class='font font-bold text-indigo-600 hover:text-indigo-700 no-underline hover:underline'>Portfolio</a> site.",
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

export default PortfolioRetyped;
