import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";

const AmazonFishing: Project = {
  name: "Amazon Fishing",
  year: 2020,
  month: 0,
  technologies: [
    "html",
    "css",
    "react",
    "js",
    "nodejs",
    "mailchimp",
    "bootstrap",
  ].sort(),
  categories: ["backend", "frontend"],
  repositoryLink: "",
  projectLink: "amazon-fishing",
  viewLinks: [],
  icon: "fas fa-fish",
  images: [],
  shortDescription:
    "A website produced for a Brazilian fish and stay experience.",
  longDescription: `A buddy of mine's father reached out to me to produce a website for his fish and stay experience in Brazil. 
    The site was to be fairly simple with a home page featuring several images, and a contact form for interested parties. 
    The father provided me with brochure he had previously designed for the exprience, which I used to guide the style of the site.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Brochure Look",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `It was interesting trying to match the aesthetic put forth by the brochure I had for reference. 
              Up until this I hadn't really tested my css skills with a design supplied by someone else, but I was up for the challenge! 
              I found a jungle foliage texture for the base background, and a papyrus texture for the main content background. 
              This got me quite far with achieving the brochure look. 
              As for the section headers, I found a font that looked like ink writing, and I stained it with crimson red.
              The client was happy with this.`,
            },
          ],
        },
        {
          name: "Contact Page",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I created a simple form to allow interested parties to send messages via email to my client.
          I utilized mailchimp to facilitate the email sending, as its free tier would accomodate for the volume the client expected to receive.`,
            },
          ],
        },
      ],
    },
  ],
};

export default AmazonFishing;
