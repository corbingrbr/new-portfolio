import Project from "../interfaces/project.interface";

export const DataCenterStateMachine: Project = {
  getRepositoryLink(): string {
    return "";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "data-center-state-machine";
  },
  getTechnologies(): string[] {
    return ["react", "js", "ts", "sql", "mongodb", "html", "css", "bootstrap"];
  },
  getCardIcon(): string {
    return "fas fa-server";
  },
  getCardImg(): string {
    return "";
  },
  getImages(): string[] {
    return [];
  },
  getTitle(): string {
    return "Data Center State Machine";
  },
  getCardDescription(): string {
    return "A web appliaction for datacenter asset and power management.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2018;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
