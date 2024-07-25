export default interface DetailSection {
  name: string;
  items: DetailItem[];
}

interface DetailItem {
  name: string;
  additional?: AdditionalDetail[];
}

export enum DetailTypes {
  TEXT = "text",
  CODE = "code",
}

type AdditionalText = { type: DetailTypes.TEXT; content: string };
type AdditionalCode = {
  type: DetailTypes.CODE;
  language: string;
  content: string;
};

type AdditionalDetail = AdditionalText | AdditionalCode;
