import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const Ionic: Project = {
  name: "Ionic",
  year: 2015,
  month: 7,
  technologies: ["processing", "java"].sort(),
  categories: ["graphics"],
  repositoryLink: "https://github.com/corbingrbr/ionic",
  projectLink: "ionic",
  viewLinks: [],
  icon: "fas fa-atom",
  images: [
    {
      name: "Ionic 1",
      src: "/assets/ionic/ion1.png",
      alt: "Simple Crystal",
    },
    {
      name: "Ionic 2",
      src: "/assets/ionic/ion2.png",
      alt: "Body Crystal",
    },
    {
      name: "Reaction",
      src: "/assets/ionic/reaction.png",
      alt: "Face Crystal",
    },
    {
      name: "Ionic Resize",
      src: "/assets/ionic/ionic-resize.png",
      alt: "Face Crystal",
    },
  ],
  shortDescription:
    "An interactive demonstration of electron transfer amongst atoms.",
  longDescription: `This project was sponsored by the Cal Poly chemistry department one summer. 
                    The goal was to create a interactive experience where atoms, with the bohr atomic representation, could collide  
                    with one another, exchange their electrons, and then become ions.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Atom Spawner",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Users can spawn atoms of their elemental choice by clicking on reduced periodic table. 
          I thought this would be a convenient and fun way to provide this selection menu.`,
            },
          ],
        },
        {
          name: "Electron Transfer",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was the main challenge for the project as I needed to support multiple things:<br/><br/>
              <ol>
                <li>
                A means of triggering a collision<br/><br/>
                To make the experience more interactive, I allowed users to click and drag the atoms on the screen. 
                To trigger a collision, you fling an atom into another. 
                Then electron exchange may occur if an atom has one available to give, the other has a vacancy, and both are willing to exchange.
                <br/>
                <br/>
                </li>
                
                <li>Identify the electron to transfer<br/><br/>
                When identifying the electron to exchange, rather than iterate through the electron set to locate the one closest to the collision, I decided to just use the last in the set. 
                This required a rotation of both atoms after collision to align them for the exchange. This reduced the travel distance for the transfer.
                <br/>
                <br/>
                </li>
                <li>Swap the electron with the other atom<br/><br/>
                This was just a simple translation of the electron from its initial position to its final one, over a period of time.
                </li>
              </ol>
              <br/>
              
              `,
            },
          ],
        },
      ],
    },
  ],
};

export default Ionic;
