import Project from "../interfaces/project.interface";

const CCXTTrader: Project = {
  name: "CCXT Trader",
  year: 2024,
  month: 2,
  technologies: ["ts", "nextjs", "tailwind"].sort(),
  categories: ["backend"],
  repositoryLink: "",
  projectLink: "ccxt-trader",
  viewLinks: [],
  icon: "fas fa-chart-candlestick",
  images: [],
  shortDescription:
    "A simple nextjs app with an endpoint to execute crypto trades using the ccxt library.",
  longDescription: `I had recently found the ccxt library for market data and 
                    trade execution, and wanted to use it somehow. An idea came to me when I found 
                    that tradingview.com can hit urls when an indicator alert triggers. 
                    I set about creating a basic nextjs app with a single endpoint to execute trades.
                    I took the opportunity to try out TaskEither's from the fp-ts for the first time. 
                    The Task comes from the asynchronous nature of interacting with the ccxt library, 
                    and the Either because we don't know if the interactions will always be successful. 
                    Utilizing TaskEither greatly improved my sense of error handling completeness when chaining multiple asynchronous calls.`,
  details: [
    {
      name: "Features",
      items: [{ name: "TaskEither" } /*, { name: "" }*/],
    },
    /*{
      name: "Highlights",
      items: [{ name: "" }],
    },
    {
      name: "Improvements",
      items: [{ name: "" }],
    },*/
  ],
};

export default CCXTTrader;
