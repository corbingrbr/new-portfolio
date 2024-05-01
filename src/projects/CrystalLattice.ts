import Project from "../interfaces/project.interface";

const CrystalLattice: Project = {
  name: "Crystal Lattice",
  year: 2014,
  month: 0,
  technologies: ["cpp", "opengl"],
  repositoryLink: "https://github.com/corbingrbr/CrystalLattice",
  projectLink: "crystal-lattice",
  icon: "fas fa-gem",
  images: [
    {
      name: "Simple Crystal",
      src: "/assets/crystal/simple-crystal.png",
      alt: "Simple Crystal",
    },
    {
      name: "Body Crystal",
      src: "/assets/crystal/body-crystal.png",
      alt: "Body Crystal",
    },
    {
      name: "Face Crystal",
      src: "/assets/crystal/face-crystal.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "Interactive visualization of three crystal lattice structures.",
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

export default CrystalLattice;
