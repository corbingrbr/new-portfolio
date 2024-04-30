import Project from "../interfaces/project.interface";

export const LightLab: Project = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/LightLab";
  },
  hasRepository(): boolean {
    return true;
  },
  getLinkName(): string {
    return "light-lab";
  },
  getTechnologies(): string[] {
    return ["html", "css", "jquery", "js", "c", "cpp", "adafruit"];
  },
  getCardIcon(): string {
    return "fas fa-traffic-light";
  },
  getCardImg(): string {
    return "/assets/lightlab/lightlab2.jpg";
  },
  getImages(): string[] {
    return [
      "/assets/lightlab/lightlab3.png",
      "/assets/lightlab/lightlab.jpg",
      "/assets/lightlab/lightlab2.jpg",
    ];
  },
  getTitle(): string {
    return "LightLab";
  },
  getCardDescription(): string {
    return "A micro-electronic LED prototype with web page for lighting sequence design.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2013;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
