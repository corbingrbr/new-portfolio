import Image from "./image.interface";
import DetailSection from "./detail-section.interface";

export default interface Project {
  name: string;
  year: number;
  month: number;
  technologies: string[];
  repositoryLink: string;
  projectLink: string;
  icon: string;
  images: Image[];
  shortDescription: string;
  longDescription: string;
  details: DetailSection[];
}
