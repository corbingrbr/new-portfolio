import Project from '../interfaces/project.interface';

export const ReduxJournal : Project = {

    getRepositoryLink(): string { return "" },
    hasRepository(): boolean { return false },
    getLinkName(): string { return "redux-journal" },
    getTechnologies(): string[] { return ["html", "css", "react", "js", "material-ui"]},
    getCardIcon(): string { return "fas fa-book"},
    getCardImg(): string { return "" },
    getTitle(): string { return "Redux Journal" },
    getCardDescription(): string { return "A simple journal entry app to test out redux integration into a react app." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2019 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },

}