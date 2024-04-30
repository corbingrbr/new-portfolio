import Project from "../interfaces/project.interface";

export const RSIMLModel: Project = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "rsi-ml-model";
  },
  getTechnologies(): string[] {
    return ["ts", "tensorflow"];
  },
  getCardIcon(): string {
    return "fa fa-chart-scatter";
  },
  getCardImg(): string {
    return "";
  },
  getImages(): string[] {
    return [];
  },
  getTitle(): string {
    return "RSI ML Model";
  },
  getCardDescription(): string {
    return "A linear regression model trained on rsi related features.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2024;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
