import Project from "../interfaces/project.interface";

const AmazonFishing: Project = {
  name: "Amazon Fishing",
  year: 2020,
  month: 0,
  technologies: [
    "html",
    "css",
    "react",
    "js",
    "nodejs",
    "mailchimp",
    "bootstrap",
  ],
  repositoryLink: "",
  projectLink: "amazon-fishing",
  viewLinks: [],
  icon: "fas fa-fish",
  images: [],
  shortDescription:
    "A website produced for a Brazilian fishing and resort experience.",
  longDescription:
    "A buddy of mine's family reached out to me to produce a website for his fish and stay experience in Brazil. The site was to be fairly simple, featuring a set of images, have a jungle theme, and include a email form to collect any interested clientele.",
  details: [
    {
      name: "Features",
      items: [{ name: "Home Page" }, { name: "Contact Page" }],
    },
  ],
};

export default AmazonFishing;
