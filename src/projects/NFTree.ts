import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const NFTree: Project = {
  name: "NFTree",
  year: 2021,
  month: 11,
  technologies: ["react", "ethereum", "tailwind"].sort(),
  categories: ["blockchain", "backend", "frontend"],
  repositoryLink: "",
  projectLink: "nftree",
  viewLinks: [
    {
      label: "Watch Video",
      url: "https://www.loom.com/embed/c278611602164f2e89bc3266e241f632?sid=013e4c5d-d152-4412-92d1-8ace5bc7093c",
    },
  ],
  icon: "fas fa-tree",
  images: [
    {
      name: "NFTree Market Item",
      src: "/assets/nftree/nftree-market-item.png",
      alt: "NFTree Market Item",
    },
    {
      name: "NFTree Market",
      src: "/assets/nftree/nftree-fit.png",
      alt: "NFTree Market Item",
    },
    {
      name: "NFTree Creation Form",
      src: "/assets/nftree/nftree1.png",
      alt: "NFTree Creation Form",
    },
    {
      name: "NFTree Setting Royalties",
      src: "/assets/nftree/nftree3.png",
      alt: "NFTree Setting Royalties",
    },
  ],
  shortDescription:
    "A NFT smart contract design exploring multi-generational royalties",
  longDescription: `This was my submission for the Consensys Boot Camp 2021 final project. 
    The project was to be of our own choice, and I wanted to explore how royalty payouts 
    could be triggered, by a single token sale, across generations of NFT works, hence the name NFTree. 
    This project was interesting, not so much for the data structure, but rather for the deployment process.
    Check out the video I produced showing off my submission!`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Creation",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Users can add their own unique work to the market by filling out a form. 
            The form requires the title of their work, its description, an image of it, and lastly, the royalty percentage expected to be paid by branching works, if permit doing so. 
            This then serves as the root of a tree for more works to come.`,
            },
          ],
        },
        {
          name: "Storage",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `One of the interesting things about smart contract development is that it's a memory constrained environment. 
          Memory use correlates to transaction costs, and in an effort to reduce costs, developers often employ interesting tricks with the memory. 
          In the case of NFT's I found that the media featured with a token usually takes the form of a string url. 
          Instead of storing the media bytes with the token, the media is uploaded to a database and a url is generated for its location. 
          I employed the same trick within this project.`,
            },
          ],
        },
        {
          name: "Branching",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `Users can branch existing tokens listed on the site if they are able to be extended. 
          This is done with the understanding that any sales of the work will share royalties with its ancestors.`,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Royalty Payouts",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This was the whole idea for the project. 
          I wanted to see a percolation of payouts across a lineage of tokens based on a single purchase event. 
          This is what comes to my mind when I think about the marriage of logic and money that smart contracts bring to the table. 
          I was thoroughly happy with my ability to execute on this vision, and I felt a sense of accomplishment and understanding by the end of the course.`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Security",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `It is one thing to make code function, and its another thing to make it impervious to bad actors. 
              This is of even greater concern when your application directly manages money, such as in the case of an ethereum smart contract. 
              I would only feel comfortable deploying a contract like this once I'd sought the advice of the community on best security practices, as well as had it audited by a security agency.`,
            },
          ],
        },
      ],
    },
  ],
};

export default NFTree;
