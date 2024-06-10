import Image from "./image.interface";
import DetailSection from "./detail-section.interface";
import ViewLink from "./view-link.interface";

export default interface Artwork {
  name: string;
  year: number;
  month: number;
  day: number;
  tags: string[];
  categories: string[];
  source: string;
  description?: string;
}
