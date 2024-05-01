import Project from "../interfaces/project.interface";

export const MatchThreeRetyped = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "match-three-retyped";
  },
  getTechnologies(): string[] {
    return ["ts", "jest", "webgl", "threejs", "react", "gsap"];
  },
  getCardIcon(): string {
    return "fas fa-th";
  },
  getCardImg(): string {
    return "/assets/matchthree/matchthree.png";
  },
  getImages(): string[] {
    return [
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
    return "Match Three Retyped";
  },
  getCardDescription(): string {
    return "A rewrite of the 'Match Three' game in typescript with improvements.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2023;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return true;
  },
};
