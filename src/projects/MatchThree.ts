import Project from "../interfaces/project.interface";

export const MatchThree: Project = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "match-three";
  },
  getTechnologies(): string[] {
    return ["js", "webgl", "threejs", "gsap"];
  },
  getCardIcon(): string {
    return "fas fa-th";
  },
  getCardImg(): string {
    return "/assets/matchthree/matchthree.png";
  },
  getImages(): string[] {
    return [
      "/assets/matchthree/matchthree0.jpg",
      "/assets/matchthree/matchthree.png",
      "/assets/matchthree/matchthree2.png",
      "/assets/matchthree/matchthree4.png",
      "/assets/matchthree/matchthree6.png",
      /*      "/assets/matchthree/matchthree7.png",
            "/assets/matchthree/matchthree9.png",
            "/assets/matchthree/matchthree10.png",
            "/assets/matchthree/matchthree11.png",*/
    ];
  },
  getTitle(): string {
    return "Match Three";
  },
  getCardDescription(): string {
    return "A simple item grouping game exploring Three.js graphic development.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2021;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return true;
  },
};
