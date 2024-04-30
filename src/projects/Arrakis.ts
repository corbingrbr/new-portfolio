import Project from "../interfaces/project.interface";

export const Arrakis: Project = {
  getRepositoryLink(): string {
    return "";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "arrakis";
  },
  getTechnologies(): string[] {
    return ["cpp", "opengl"];
  },
  getCardIcon(): string {
    return "fas fa-globe-europe";
  },
  getCardImg(): string {
    return "/assets/arrakis/arrakis.png";
  },
  getImages(): string[] {
    return ["/assets/arrakis/arrakis.png"];
  },
  getTitle(): string {
    return "Arrakis";
  },
  getCardDescription(): string {
    return "Rotationary planet design with interesting shader techniques to produce night/day environment.";
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
    return false;
  },
};
