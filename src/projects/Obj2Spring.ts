import Project from '../interfaces/project.interface';

export const Obj2Spring : Project = {

    getRepositoryLink(): string { return "https://github.com/corbingrbr/Obj2SpringSystem" },
    hasRepository(): boolean { return true },
    getLinkName(): string { return "obj2spring" },
    getTechnologies(): string[] { return ["cpp", "opengl", "git"]},
    getCardIcon(): string { return "fab fa-connectdevelop"},
    getCardImg(): string { return "/assets/obj2spring/obj2spring.png" },
    getTitle(): string { return "Obj2Spring" },
    getCardDescription(): string { return "A visualization of a system of springs produced by a supplied obj file" },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return false },

}