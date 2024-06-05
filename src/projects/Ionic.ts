import Project from "../interfaces/project.interface";

const Ionic: Project = {
  name: "Ionic",
  year: 2015,
  month: 7,
  technologies: ["processing", "java"].sort(),
  repositoryLink: "https://github.com/corbingrbr/ionic",
  projectLink: "ionic",
  viewLinks: [],
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
  longDescription: `This project was done in collaboration with the Cal Poly chemistry department over one summer. 
                    The goal was to create a interactive experience showing how particular atoms, using a bohr representation, 
                    will exchange electrons with one another, forming ions.`,
  details: [
    {
      name: "Features",
      items: [{ name: "Atom Spawner" }, { name: "Electron Transition" }],
    },
  ],
};

export default Ionic;
