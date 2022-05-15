import Project from '../interfaces/project.interface';

export const NFTree: Project = {

    getRepositoryLink(): string { return "" },
    hasRepository(): boolean { return false },
    getLinkName(): string { return "nftree" },
    getTechnologies(): string[] { return ["react", "ethereum", "tailwind"] },
    getCardIcon(): string { return "fas fa-tree" },
    getCardImg(): string { return "" },
    getTitle(): string { return "NFTree" },
    getCardDescription(): string { return "An NFT smart contract design exploring multi-generational royalties" },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2021 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return true },

}