import Project from '../interfaces/project.interface';

export const AmazonFishing: Project = {

    getRepositoryLink(): string { return "" },
    hasRepository(): boolean { return false },
    getLinkName(): string { return "amazon-fishing" },
    getTechnologies(): string[] { return ["html", "css", "react", "js", "nodejs", "mailchimp", "bootstrap"] },
    getCardIcon(): string { return "fas fa-fish" },
    getCardImg(): string { return "" },
    getTitle(): string { return "Amazon Fishing" },
    getCardDescription(): string { return "A website produced for fishing and resort experience located in Brazil." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2020 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },
}