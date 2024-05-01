import Project from "../interfaces/project.interface";

export const AmazonFishing = {
  getRepositoryLink(): string {
    return "";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "amazon-fishing";
  },
  getTechnologies(): string[] {
    return ["html", "css", "react", "js", "nodejs", "mailchimp", "bootstrap"];
  },
  getCardIcon(): string {
    return "fas fa-fish";
  },
  getCardImg(): string {
    return "";
  },
  getImages(): string[] {
    return [];
  },
  getTitle(): string {
    return "Amazon Fishing";
  },
  getCardDescription(): string {
    return "A website produced for a friend's Brazilian fishing and resort experience.";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2020;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
