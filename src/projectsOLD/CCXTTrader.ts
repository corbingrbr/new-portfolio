import Project from "../interfaces/project.interface";

export const CCXTTrader = {
  getRepositoryLink(): string {
    return "https://github.com/corbingrbr/";
  },
  hasRepository(): boolean {
    return false;
  },
  getLinkName(): string {
    return "ccxt-trader";
  },
  getTechnologies(): string[] {
    return ["ts", "nextjs"];
  },
  getCardIcon(): string {
    return "fas fa-chart-candlestick";
  },
  getCardImg(): string {
    return "";
  },
  getImages(): string[] {
    return [];
  },
  getTitle(): string {
    return "CCXT Trader";
  },
  getCardDescription(): string {
    return "A simple nextjs app with an endpoint to execute crypto trades using the ccxt library";
  },
  hasDescription(): boolean {
    return true;
  },
  getDescription(): string {
    return "Missing Project Description";
  },
  getYear(): number {
    return 2024;
  },
  hasView(): boolean {
    return true;
  },
  hasDemo(): boolean {
    return false;
  },
};
