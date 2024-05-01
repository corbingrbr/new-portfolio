import Project from "../interfaces/project.interface";

export const NFTree = {
  getRepositoryLink(): string {
    return "";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "nftree";
  },
  getTechnologies(): string[] {
    return ["react", "ethereum", "tailwind"];
  },
  getCardIcon(): string {
    return "fas fa-tree";
  },
  getCardImg(): string {
    return "/assets/nftree/nftree.png";
  },
  getImages(): string[] {
    return [
      "/assets/nftree/nftree-fit.png",
      "/assets/nftree/nftree1.png",
      //"/assets/nftree/nftree2.png",
      "/assets/nftree/nftree3.png",
      //"/assets/nftree/nftree4.png",
      //"/assets/nftree/nftree5.png",
      //"/assets/nftree/nftree6.png",
      //"/assets/nftree/nftree7.png",
      //"/assets/nftree/nftree8.png",
      //"/assets/nftree/nftree9.png",
      //"/assets/nftree/nftree10.png",
      //"/assets/nftree/nftree11.png",
    ];
  },
  getTitle(): string {
    return "NFTree";
  },
  getCardDescription(): string {
    return "A NFT smart contract design exploring multi-generational royalties";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2021;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return true;
  },
};
