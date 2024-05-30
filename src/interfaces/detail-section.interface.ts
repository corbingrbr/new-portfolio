export default interface DetailSection {
  name: string;
  items: DetailItem[];
}

interface DetailItem {
  name: string;
  additional?: string;
}
