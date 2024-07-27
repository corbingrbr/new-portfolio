import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";
import { styleText } from "../utils/utils";

const FloodFill: Project = {
  name: "FloodFill",
  year: 2015,
  month: 6,
  technologies: ["cpp", "opengl"].sort(),
  categories: ["graphics"],
  repositoryLink: "https://github.com/corbingrbr/flood-fill",
  projectLink: "flood-fill",
  viewLinks: [{ label: "Watch Video", url: "https://youtu.be/hfMVrTvxlYY" }],
  icon: "fa-light fa-water-arrow-up",
  images: [
    {
      name: "Flood Fill",
      src: "/assets/flood/flood.png",
      alt: "Screenshot of gameplay",
    },
  ],
  shortDescription:
    "A puzzle platformer involving color within a voxel level design.",
  longDescription: `This was a group final project for one of my Cal Poly Graphics courses involving myself and three other classmates. 
  The goal was to take a game idea from concept art to demo using the basic OpenGL framework. 
  This was the most complex project I'd worked on up until this point, 
  and it introduced me to how version control works within a team. 
  We tackled separate features and the culmination of efforts produced a final product I was very proud of. Check out the video featuring its gameplay below!`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Concept Art",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I drew up the initial art for our game. 
          This was the putting of pen to paper with the ideas we'd been discussing. It set the stage for what was to come.`,
            },
          ],
        },
        {
          name: "Level Design",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The design for this was about as simple as they come;
          it was a 3D array where an integer at each index determined what to render at that cube in space. 
          Not going to lie, creating levels this way was a bit of a spacial challenge.`,
            },
          ],
        },
        {
          name: "Menu Screen",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I created a page system to support this, and the coolest part was the font I found for the text. 
          It perfectly fit the voxel aesthetic!`,
            },
          ],
        },
        {
          name: "Lever Mechanism",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was added to provide additional puzzle to the levels. 
          In the second level, a lever you trigger spawns more blocks in which allow you to progress. 
          This could have been used more extensively if we had produced more than three levels.`,
            },
          ],
        },
        {
          name: "Flood Mechanism",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was main concept of the game. You would use your slime gun to fill up holes in the ground. 
          Depending on the color of the slime, you would experience different physics when in contact with the surface. 
          <ul>
          <li>${styleText("text-lime-500", "GREEN")} increased speed</li> 
          <li>${styleText("text-sky-500", "BLUE")} increased jump</li>
          <li>${styleText(
            "text-red-600",
            "RED"
          )} increased both speed and jump</li>`,
            },
          ],
        },
        {
          name: "Sink Mechanism",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `In order to prevent the flooding capability in particular areas, a teammate coded a sink system. 
          This provided us greater freedom in our level design and was a nice addition.`,
            },
          ],
        },
        {
          name: "Block Removal",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was the undo button for the slime gun. 
          If you filled a section as a mistake, you could right click when in proximity to some color blocks to remove them. 
          However, one caveat was that the blocks you were trying to remove needed to be the color you had equipped on the gun. 
          The gun could swap between two different colors, and since there are three in the game, this was a neat trick to force a players hand in the puzzle design. 
          Players might be forced to swap out a color on their gun so that they could remove a colored block in the way of their progress.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Teamwork",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was the first project I had the opportunity to collaborate with several other developers on. 
      It was a great learning experience; I got to work with git for version control, and I saw how others approached code design. 
      It was also eye opening to see how much a project can scale with several hands contributing.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "More Levels",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `We made a decent set of game mechanisms that I think could have carried the game further. Would have been cool to see where it'd have gone with some more time.`,
            },
          ],
        },
      ],
    },
  ],
};

export default FloodFill;
