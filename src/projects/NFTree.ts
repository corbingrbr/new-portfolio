import Project from "../interfaces/project.interface";

const NFTree: Project = {
  name: "NFTree",
  year: 2021,
  month: 11,
  technologies: ["react", "ethereum", "tailwind"],
  repositoryLink: "",
  projectLink: "nftree",
  viewLinks: [{ label: "Watch Video", url: "" }],
  icon: "fas fa-tree",
  images: [
    {
      name: "NFTree Market",
      src: "/assets/nftree/nftree-fit.png",
      alt: "NFTree Market",
    },
    {
      name: "NFTree Creation Form",
      src: "/assets/nftree/nftree1.png",
      alt: "NFTree Creation Form",
    },
    {
      name: "NFTree Setting Royalties",
      src: "/assets/nftree/nftree3.png",
      alt: "NFTree Setting Royalties",
    },
  ],
  shortDescription:
    "A NFT smart contract design exploring multi-generational royalties",
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

export default NFTree;
