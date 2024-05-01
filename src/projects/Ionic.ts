import Project from "../interfaces/project.interface";

const Ionic: Project = {
  name: "Ionic",
  year: 2014,
  month: 0,
  technologies: ["processing", "java"],
  repositoryLink: "https://github.com/corbingrbr/ionic",
  projectLink: "ionic",
  icon: "fas fa-atom",
  images: [
    {
      name: "Ionic 1",
      src: "/assets/ionic/ion1.png",
      alt: "Simple Crystal",
    },
    {
      name: "Ionic 2",
      src: "/assets/ionic/ion2.png",
      alt: "Body Crystal",
    },
    {
      name: "Reaction",
      src: "/assets/ionic/reaction.png",
      alt: "Face Crystal",
    },
    {
      name: "Ionic Resize",
      src: "/assets/ionic/ionic-resize.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "An interactive demonstration of electron transfer amongst atoms.",
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

export default Ionic;
