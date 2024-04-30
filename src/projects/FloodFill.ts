import Project from "../interfaces/project.interface";

export const FloodFill: Project = {
  getRepositoryLink(): string {
    return "https://github.com/MatheusFaria/flood-fill";
  },
  hasRepository(): boolean {
    return true;
  },
  getLinkName(): string {
    return "flood-fill";
  },
  getTechnologies(): string[] {
    return ["cpp", "opengl"];
  },
  getCardIcon(): string {
    return "fas fa-cubes";
  },
  getCardImg(): string {
    return "/assets/flood/flood.png";
  },
  getImages(): string[] {
    return ["/assets/flood/flood.png"];
  },
  getTitle(): string {
    return "FloodFill";
  },
  getCardDescription(): string {
    return "A puzzle game involving color and physics within a voxel level design.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2015;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
