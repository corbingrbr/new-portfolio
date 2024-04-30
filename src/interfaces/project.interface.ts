export default interface Project {
  getRepositoryLink(): string;
  hasRepository(): boolean;
  getLinkName(): string;
  getTechnologies(): string[];
  getCardIcon(): string;
  getCardImg(): string;
  getCardDescription(): string;
  getImages(): string[];
  getTitle(): string;
  hasDescription(): boolean;
  getDescription(): string;
  getYear(): number;
  hasView(): boolean;
  hasDemo(): boolean;
}

/*import ImageI from "./image.interface";
import DetailSectionI from "./detail-section.interface";

export default interface ProjectI {
  name: string;
  year: number;
  month: number;
  technologies: string[];
  repositoryLink: string;
  projectLink: string;
  icon: string;
  images: Image[];
  shortDescription: "";
  longDescription: string;
  details: DetailSection[];
}*/
