import Project from '../interfaces/project.interface';

export const DataCenterStateMachine: Project = {

    getRepositoryLink(): string { return "" },
    hasRepository(): boolean { return false },
    getLinkName(): string { return "data-center-state-machine" },
    getTechnologies(): string[] { return ["react", "js", "typeScript", "sql", "mongodb", "git", "html", "css", "bootstrap"] },
    getCardIcon(): string { return "fas fa-server" },
    getCardImg(): string { return "" },
    getTitle(): string { return "Data Center State Machine" },
    getCardDescription(): string { return "A machine to state transition a tree model representing a data center's equipment structure." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2018 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },

}