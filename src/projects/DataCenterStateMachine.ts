import Project from "../interfaces/project.interface";

const DataCenterStateMachine: Project = {
  name: "DataCenterStateMachine",
  year: 2018,
  month: 2,
  technologies: [
    "react",
    "js",
    "ts",
    "sql",
    "mongodb",
    "meteor",
    "html",
    "css",
    "bootstrap",
  ],
  repositoryLink: "",
  projectLink: "data-center-state-machine",
  viewLinks: [],
  icon: "fas fa-server",
  images: [],
  shortDescription:
    "A web application for datacenter asset and power management.",
  longDescription: `This was for my first job out of college, 
  working for a company that maintained spreadsheets of asset and power analysis for Arizona data centers. 
  The goal was create a web application to host asset and power analysis tooling for their clients, USFoods and Wells Fargo. 
  It was my first time building a web application of this scope, and I chose to use MeteorJS with React as my stack.`,
  details: [
    {
      name: "Features",
      items: [
        { name: "Data Center Layouts" },
        { name: "Power Structure" },
        { name: "Change Requests" },
      ],
    },
    {
      name: "Highlights",
      items: [{ name: "Power Shift Projections" }, { name: "Visuals" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },
  ],
};

export default DataCenterStateMachine;
