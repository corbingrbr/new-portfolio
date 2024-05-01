import Project from "../interfaces/project.interface";

export const Ionic = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/ionic";
  },
  hasRepository(): boolean {
    return true;
  },
  getLinkName(): string {
    return "ionic";
  },
  getTechnologies(): string[] {
    return ["processing", "java"];
  },
  getCardIcon(): string {
    return "fas fa-atom";
  },
  getCardImg(): string {
    return "/assets/ionic/ionic.png";
  },
  getImages(): string[] {
    return [
      "/assets/ionic/ion1.png",
      "/assets/ionic/ion2.png",
      "/assets/ionic/reaction.png",
      "/assets/ionic/ionic-resize.png",
    ];
  },
  getTitle(): string {
    return "Ionic";
  },
  getCardDescription(): string {
    return "An interactive demonstration of electron transfer amongst atoms.";
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
