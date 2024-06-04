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
  longDescription: `This was my submission for the Consensys Boot Camp 2021 final project. 
    The project was to be of our own choice, and I wanted to explore how royalty payouts 
    could be triggered, by a single token sale, across generations of NFT works, hence the name NFTree. 
    This project was interesting, not so much for the data structure, but rather for the deployment process.
    Check out the video I produced showing off my submission!`,
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
