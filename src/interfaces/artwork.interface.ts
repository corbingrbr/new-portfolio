export default interface Artwork {
  name: string;
  year: number;
  month: number;
  day: number;
  mediums: string[];
  tags: string[];
  source: string;
  description?: string;
}
