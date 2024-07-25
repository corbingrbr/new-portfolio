import Project from "../interfaces/project.interface";
import { DetailTypes } from "../interfaces/detail-section.interface";

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
  longDescription: `I had recently found the ccxt library for crypto market data and 
                    trade execution, and wanted to use it somehow. An idea came to me when I found 
                    that tradingview.com can hit urls when an indicator alert triggers. 
                    I set about creating a barebone nextjs app with a single endpoint to field the signals on.
                    I took the opportunity to try out TaskEither from the fp-ts library in this endpoint design. 
                    The Task comes from the asynchronous nature of interacting with the ccxt library, 
                    and the Either is because we don't know if the interactions will always be successful. 
                    Utilizing TaskEither greatly improved my sense of error handling completeness when chaining multiple asynchronous calls together in this endpoint handler.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "TaskEither",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Previously I found comfort in using Either to capture error state in a synchronous processes, so I was excited to see what TaskEither might do for me with async work. 
          This comfort didn't come immediate with my first attempts using TaskEither. 
          It operates a bit different to using Option and Either in that it employs lazy execution. 
          To this effect I was finding it a bit difficult to understand what state the data was in while it was going through the pipe. 
          Typescript was a godsend in this regard as it provided type hints in my IDE. 
          In reflection, my development process was slower than usual, however afterwards, much like with my use of Either and Option, I felt a sense of comfort with the completeness of the solution.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Error Coverage",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `There is something magical about chaining multiple async calls together only worrying about the 'right' route, knowing any errors will be captured along the way.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Profit",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `If only I could find a way to make some money with it.`,
            },
          ],
        },
      ],
    },
  ],
};

export default CCXTTrader;
