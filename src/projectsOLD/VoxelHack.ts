import Project from "../interfaces/project.interface";

export const VoxelHack = {
  getRepositoryLink(): string {
    return "";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "voxel-hack";
  },
  getTechnologies(): string[] {
    return ["unity", "csharp"];
  },
  getCardIcon(): string {
    return "fas fa-terminal";
  },
  getCardImg(): string {
    return "";
  },
  getImages(): string[] {
    return [];
  },
  getTitle(): string {
    return "Voxel Hack";
  },
  getCardDescription(): string {
    return "A voxel aesthetic game which features the real-time attachment of user produced code to environmental processes.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2019;
  },
  hasView(): boolean {
    return false;
  },
  hasDemo(): boolean {
    return false;
  },
};
