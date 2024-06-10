import Project from "../interfaces/project.interface";

const NFTree: Project = {
  name: "NFTree",
  year: 2021,
  month: 11,
  technologies: ["react", "ethereum", "tailwind"].sort(),
  categories: ["blockchain", "backend", "frontend"],
  repositoryLink: "",
  projectLink: "nftree",
  viewLinks: [
    {
      label: "Watch Video",
      url: "https://www.loom.com/embed/c278611602164f2e89bc3266e241f632?sid=013e4c5d-d152-4412-92d1-8ace5bc7093c",
    },
  ],
  icon: "fas fa-tree",
  images: [
    {
      name: "NFTree Market Item",
      src: "/assets/nftree/nftree-market-item.png",
      alt: "NFTree Market Item",
    },
    {
      name: "NFTree Market",
      src: "/assets/nftree/nftree-fit.png",
      alt: "NFTree Market Item",
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
