import Image from "./image.interface";
import DetailSection from "./detail-section.interface";
import ViewLink from "./view-link.interface";

export default interface Project {
  name: string;
  year: number;
  month: number;
  technologies: string[];
  repositoryLink: string;
  projectLink: string;
  viewLinks: ViewLink[];
  icon: string;
  images: Image[];
  shortDescription: string;
  longDescription: string;
  details: DetailSection[];
}
