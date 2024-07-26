import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";
import { createLinkOfText } from "../utils/utils";

const MatchThree: Project = {
  name: "Match Three",
  year: 2021,
  month: 8,
  technologies: ["js", "webgl", "threejs", "gsap"].sort(),
  categories: ["graphics", "frontend"],
  repositoryLink: "",
  projectLink: "match-three",
  viewLinks: [],
  icon: "fa-duotone fa-grid-round-5",
  images: [
    {
      name: "Prototype",
      src: "/assets/matchthree/matchthree0.jpg",
      alt: "Simple Crystal",
    },
    {
      name: "Match Three Game 1",
      src: "/assets/matchthree/matchthree.png",
      alt: "Body Crystal",
    },
    {
      name: "Match Three Game 2",
      src: "/assets/matchthree/matchthree2.png",
      alt: "Face Crystal",
    },

    {
      name: "Match Three Game 3",
      src: "/assets/matchthree/matchthree4.png",
      alt: "Body Crystal",
    },
    {
      name: "Match Three Game 4",
      src: "/assets/matchthree/matchthree6.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "A simple item grouping game exploring Three.js graphic development.",
  longDescription: `I had recently taken this ${createLinkOfText(
    "https://threejs-journey.com/",
    "course"
  )}, 
      and was looking for a concept to apply my learnings. A match three game seemed simple enough, 
      however it would require destroying/creating meshes which isn't common in most of the examples featured online. 
      I built the basic game loop, however a pesky bug would appear infrequently and ruin the board structure. 
      I had a difficult time identifying if the bug belonged to the animation, or my underlying board logic. 
      Due to this, I decided to start over with ${createLinkOfText(
        "/projects/match-three-retyped",
        "Match Three Retyped"
      )}.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Game Loop",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I built the following basic gameplay loop off of what I recalled from playing Candy Crush and Bejeweled in the past. <br/><br/>
              
              <ol>
                <li>Player inputs move</li>
                <li>Identify groups</li>
                <li>If no groups, return to #1</li>
                <li>Delete groups</li>
                <li>Move board items above down</li>
                <li>Return to #2 </li>
              </ol><br/><br/>

            `,
            },
          ],
        },
        {
          name: "Animations",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I utilized GSAP to execute the animations. 
              It worked nicely as I easily could execute a translation over a specific amount of time. 
          I paired this with timeouts to know when an animation would complete.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Recursion",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `When I first learned about recursion, it felt like magic. 
          Seeing the animation put to the underlying recursive game loop reminds me of that feeling of awe. 
          I purposely would set the board up to have a greater probability of groups just so that I could keep watching it loop.`,
            },
          ],
        },
        {
          name: "Alpha Masks",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was a surprise for me. 
          I wasn't really expecting to do anything fancy with board items. 
          I figured it would likely require some artwork that I wasn't ready to dedicate my time to. 
          However, after looking at the docs for three js I realized I could supply and image as an alpha mask for the texture.
          I went crazy after this, swapping in all the images I could find. I honestly got a bit side-tracked, but it was fun.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Mesh Management",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `The examples I was finding on the internet didn't exhibit any deletion of meshes. 
              They would just show typical mesh manipulations or texturing. 
              This was an issue for me as match three games typically have a lifecycle for their board items. 
              The solution I came up with involved creating a set of meshes, one for each item on the board, and I would hide them whenever a group deletion was to occur. 
              They would be shown once more when new items 'spawned' dropping down into the board. 
              This code was not all that straight forward and was a code smell.
              Ideally, the mesh lifecycle could be handled by something more reactive, like that which I find found in the ${createLinkOfText(
                "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
                "react-three-fiber"
              )} library.
              I eventually suspected it to be the culprit of the bug in my gameplay however I never was able to prove it. 
                `,
            },
          ],
        },
        {
          name: "Bug",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I discovered that occasionally, when board items meshes were being hidden and translated about, the board would go into disarray.
              Since I had no tests in place, it was hard for me to definitively say what code was responsible. 
              This was disappointing, and after a bit of headache, I decided it'd just be best to start over. 
              This project served as a lesson to myself to use better development practices when necessary.
              You can see my improved approach in ${createLinkOfText(
                "/projects/match-three-retyped",
                "Match Three Retyped"
              )}.`,
            },
          ],
        },
      ],
    },
  ],
};

export default MatchThree;
