import Project from "../interfaces/project.interface";

export const Obj2Spring: Project = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/Obj2SpringSystem";
  },
  hasRepository(): boolean {
    return true;
  },
  getLinkName(): string {
    return "obj2spring";
  },
  getTechnologies(): string[] {
    return ["cpp", "opengl"];
  },
  getCardIcon(): string {
    return "fab fa-connectdevelop";
  },
  getCardImg(): string {
    return "/assets/obj2spring/obj2spring.png";
  },
  getImages(): string[] {
    return ["/assets/obj2spring/cropped-spring.gif"];
  },
  getTitle(): string {
    return "Obj2Spring";
  },
  getCardDescription(): string {
    return "A visualization of spring systems derived from supplied obj files";
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
