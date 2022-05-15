import Project from '../interfaces/project.interface';

export const WebGLCL: Project = {

    getRepositoryLink(): string { return "https://github.com/corbingrbr/web-gl-cl" },
    hasRepository(): boolean { return true },
    getLinkName(): string { return "webglcl" },
    getTechnologies(): string[] { return ["js", "webgl", "git"] },
    getCardIcon(): string { return "fas fa-gem" },
    getCardImg(): string { return "" },
    getTitle(): string { return "WebGLCL" },
    getCardDescription(): string { return "A WebGL rewrite of the 'Crystal Lattice' OpenGL project." },
    hasDescription(): boolean { return true },
    getDescription(): string { return "Missing Project Description" },
    getYear(): number { return 2014 },
    hasView(): boolean { return true },
    hasDemo(): boolean { return true },

}