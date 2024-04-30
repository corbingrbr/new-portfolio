import Project from "../interfaces/project.interface";

export const WebGLCL: Project = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/web-gl-cl";
  },
  hasRepository(): boolean {
    return true;
  },
  getLinkName(): string {
    return "webglcl";
  },
  getTechnologies(): string[] {
    return ["js", "webgl"];
  },
  getCardIcon(): string {
    return "fas fa-gem";
  },
  getCardImg(): string {
    return "";
  },
  getTitle(): string {
    return "WebGLCL";
  },
  getImages(): string[] {
    return [
      "/assets/crystal/face-crystal.png",
      "/assets/crystal/body-crystal.png",
      "/assets/crystal/simple-crystal.png",
    ];
  },
  getCardDescription(): string {
    return "A rewrite of the 'Crystal Lattice' OpenGL project in WebGL";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2014;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return true;
  },
};
