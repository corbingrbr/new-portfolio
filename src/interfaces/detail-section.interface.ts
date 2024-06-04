export default interface DetailSection {
  name: string;
  items: DetailItem[];
}

interface DetailItem {
  name: string;
  additional?: AdditionalDetail[];
}

type AdditionalText = { type: "text"; content: string };
type AdditionalCode = { type: "code"; language: string; content: string };

type AdditionalDetail = AdditionalText | AdditionalCode;
