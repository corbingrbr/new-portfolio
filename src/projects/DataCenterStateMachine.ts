import Project from "../interfaces/project.interface";

const DataCenterStateMachine: Project = {
  name: "DataCenterStateMachine",
  year: 2018,
  month: 0,
  technologies: [
    "react",
    "js",
    "ts",
    "sql",
    "mongodb",
    "html",
    "css",
    "bootstrap",
  ],
  repositoryLink: "",
  projectLink: "data-center-state-machine",
  icon: "fas fa-server",
  images: [],
  shortDescription:
    "A web appliaction for datacenter asset and power management.",
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

export default DataCenterStateMachine;
