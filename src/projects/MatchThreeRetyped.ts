import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const MatchThreeRetyped: Project = {
  name: "Match Three Retyped",
  year: 2023,
  month: 0,
  technologies: ["ts", "jest", "webgl", "threejs", "react", "tailwind"].sort(),
  categories: ["graphics", "frontend", "testing"],
  repositoryLink: "",
  projectLink: "match-three-retyped",
  viewLinks: [
    /*{ label: "Play Game", url: "" }*/
  ],
  icon: "fa-duotone fa-grid-round-5",
  images: [
    {
      name: "Match Three Game",
      src: "/assets/match-three-retyped/match-three-clip.gif",
      alt: "Match Three Game",
    },
  ],
  shortDescription: `A rewrite of the ${createLinkOfText(
    "/projects/match-three",
    "Match Three"
  )} game.`,
  longDescription: `I'd been learning about the benefits of functional programming 
                    and figured this project could benefit from it. Armed with typescript, fp-ts, and jest, 
                    I went back and retyped my old code using a TDD approach. The experience was therapeutic. At the end I had a solid board management library.
                    However, I still had the final hurdle of game state management to solve. 
                    While researching I found the ${createLinkOfText(
                      "https://codesandbox.io/p/sandbox/space-game-i2160?",
                      "Space Game"
                    )} by ${createLinkOfText(
    "https://pmnd.rs/",
    "pmnd.rs"
  )} and its architecture was the just the insight I needed. 
                    It presented an organized means of scaling actions and state management through the use of a store.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Board Library",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Before a single frame was rendered, I had built a library of functions to perform group identification and board state manipulations. 
                       This helped to separate the logic between rendering and game play mechanics.`,
            },
          ],
        },
        {
          name: "Tests",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The previous iteration of this game I had a bug revealing itself occasionally in the board item shifting animatinos. 
          I didn't know if the bug stemmed from the animation logic or the board logic. 
          This time around I wanted to be confident in the board logic I had written before even working on the animation. 
          With the use of Jest, I wrote more than 50 tests for my board library. 
          Afterwards I felt a great sense of assurance that my board logic was working as I'd expected. 
          Testing is worth it.`,
            },
          ],
        },
        {
          name: "Store",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `One of the other issues in my prior attempt was where to put all the game state. 
            I had board state covered by my library, however there were other stateful items to the game such as score, turns taken, turns left, etc ... 
            and I hadn't found a reasonable place to store them. 
            This was until I came across the space game example I mention in the project description. 
            After seeing its use of a store, I knew exactly how to organize my own game state and its updates.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Modularity",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This attempt was more planned than my initial one. 
          Stages of development were separated, and as a result my code had improved organization and purpose. 
          Testing became easier as a result, which ultimately gave me more confidence throughout the completion of the project.
          It's one thing to know this is way you should develop, and its another to put it into practice.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Functional Core, Imperative Shell",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `One of the interesting concepts talked about in functional programming is the separation of pure functional code from side effects. 
          This got me thinking about where some of these lines could be drawn in this game. 
          One place that came to mind was just after the player conducts a board item swap and the 
          recursive loop of group identification, deletion, and translations takes place. 
          The code responsible for the board state manipulations is pure, however, the animations that follow each loop execution is not. <br/><br/>
          To separate these conerns, I considered how one could complete the recursion, before any animations were executed. 
          On each loop execution, data could be generated and added to a queue to represent the animations needing to take place. 
          Once the recursion completes, the queue of animations would execute. 
          This sounded interesting to me, and I was keen to implement it until I realized a potential flaw. 
          I considered the potential delay between a player's input and the animation execution, and I realized, in a worst case scenario, that could be inifinite. `,
            },
          ],
        },
        {
          name: "Game Complexity",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I tried not to assume a lot about the game when creating it. 
          I knew I needed the core mechanics of group identification, deletion, and translations, 
          however I didn't want to constrain the idea of what a group was. Was a group to be vertical, horizontal, or both? Would its length be greater than two, less than one hundred, or exactly four? 
          Leaving these questions unanswered meant later on I'd have greater freedom in how I could express the gameplay. 
          I have this listed under improvements, because I have yet to take advantage of this ambiguity I baked into the core mechanics. 
          I'll get around to it someday, maybe.`,
            },
          ],
        },
      ],
    },
  ],
};

export default MatchThreeRetyped;
