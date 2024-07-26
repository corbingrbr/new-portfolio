import { DetailTypes } from "../interfaces/detail-section.interface";
import Project from "../interfaces/project.interface";
import { styleText } from "../utils/utils";

const DCIM: Project = {
  name: "DCIM",
  year: 2018,
  month: 2,
  technologies: [
    "react",
    "js",
    "sql",
    "mongodb",
    "meteor",
    "html",
    "css",
    "bootstrap",
  ].sort(),
  categories: ["backend", "database", "frontend", "graphics", "testing"],
  repositoryLink: "",
  projectLink: "dcim",
  viewLinks: [],
  icon: "fa-duotone fa-server",
  images: [],
  shortDescription:
    "A web application for datacenter asset and power management.",
  longDescription: `This was for my first opportunity out of college and I was 
  working for a company that maintained spreadsheets to conduct asset management and power analysis for Arizona data centers such as USFoods and Wells Fargo. 
  My job was to create the next iteration of their tooling as a web application. 
  This was my first time building a web application of this scale, but I was up for the challenge. 
  I chose MeteorJS with a React frontend as my platform to build upon.`,
  details: [
    {
      name: "Features",
      items: [
        {
          name: "Power Structure Tree",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `I began to see data center power infrastructure as a tree, with each power unit, or node, branching off with power supply to its respective children. 
              At the root you have your main distribution boards, or generators. These feed power to the UPS, which in turn supply the PDU's. 
              The PDU's then finally deliver power to the racks which host all the servers. 
              The servers are the final endpoints of the power supply, and as such can be considered the leaves. 
              To this nature, when considering the power load on any given unit of the structure, one can use a recursive algorithm to accumulate the load assumed by the servers it supplies.`,
            },
          ],
        },
        {
          name: "Data Center Floorplans",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `For one week, I went with my boss and coworker to a USFoods data center to take inventory of all the hardware on their floorplan. 
          Rack by rack, we cataloged each server's model, id, unit height, and position. 
          This data was then to be used to recreate the space as an interactable floorplan within the app.
          Jordan, our talented in house 3D artist, created a birds eye view render of the space.
          I then dropped this image into a Leafly map window as a backdrop and used overlay box geometry to highlight rack locations.
          After binding a handler to the geometry, a click on one would spawn another window featuring a visual of that specific rack. 
          Inside you'd see the servers it hosted, all to the exact detail recorded from our physical walkthrough.
          Working this, from initial data gathering to complete interactive tool, was extremely gratifying.
          `,
            },
          ],
        },
        {
          name: "Live Power Metrics",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `<p>
              Sensors located all throughout partnering data centers were constantly pulling data readings and upserting to a SQL database maintained by my company. 
          These metrics, such as energy usage and temperature, are important to the health and cost of a data center operation. 
          To gain greater insight into these trends, my company tasked me with charting this data.
          </p>
          <p>
          This turned out to be more complicating than I expected due to the scale of the data.
          For the sake of performance, we needed to reduce the data volume while also being careful not to eliminate any extremes that might inform of issues. 
          From research, I arrived at using the Ramer-Douglas-Peucker algorithm to achieve this effect.
          On the server, I would query for the data and then simplify it with RDP before sending it to the client. 
          From there the data was passed into an Echart and voilà! We had performant charting of large, time-series, data sets!
          </p>
          `,
            },
          ],
        },
        {
          name: "Change Requests",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `<p>
              These efforts to digitally represent a data center wasn't just create something static for reference. 
          Rather, it was to serve as an active tool in the assessing and planning of operations at sites. 
          This meant that our data needed to be able to adapt to ongoing real world changes. 
          I developed a means to support this through a clever structuring of forms. 
          You'd never guess what it resembled ... a tree!
          </p>
          
          <p>
          I was creating forms for each of the power assets featured at a site. 
          To adjust the state of a single asset you could just open its form type, adjust the details, and save. 
          However, I began to realize that a lot operations were actually multistep.
          <p>

          For instance, a new rack installation with a new server to be mounted inside requires two steps: <br/><br/>

            <ol>
              <li>Create the new server</li>
              <li>Create the new rack with the new server added</li>
            </ol><br/>
              
            This friction is what brought about the idea for a different structuring of the forms. 
            By allowing a user to open a create rack form, and then from inside there allow them to access the create server form, they could achieve their goal quicker and more intuitively.
            Complex data operations now became more seamless.</p>


            <p>From an implementation perspective, the forms were being popped and pushed from a stack while a set of data was being manipulated to identify the differences this edit session intended to make. 
            At the end of a session a user could save the request to be later edited, or applied to the live data center state. 
            This is what I ended up calling a change request, which in hindsight, is kind of like a pull request.</p>
              
          `,
            },
          ],
        },
      ],
    },
    {
      name: "Highlights",
      items: [
        {
          name: "Rollbacks",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `When we apply a change request, we are applying a set of adjustments to move the live data forward. 
              However, that is not the only purpose that they can serve. When inversed, change requests they can take you back to a previous state of the live data.
              This is when I found a strong appreciation for the ${styleText(
                "text-lime-600",
                ".reduce()"
              )} function.`,
            },
          ],
        },
        {
          name: "Charts",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `<p>One of the most exciting things about this project was putting visuals to data sets. 
          No charting library could have served me better than the one created by Baidu called Echarts. 
          Their library generated sleek, interactive charts with a high flexibility for customization. 
          On top of this, they supported the widest range of chart types I'd seen on the market, and it was all free!
          I used the library to create all the listed below and I can't express my gratitude enough: </p><br/>
          <ul>
          <li>Line charts for trends</li>
          <li>Bar charts for load comparisons</li>
          <li>Calendar heat maps for alerts</li>
          <li>Tree maps for power structure visualization</li>
          <li>Guages for temperature and energy metrics</li>
          <li>Custom Rack display</li>
          <li>Custom PDU switch display</li>
          </ul>`,
            },
          ],
        },
      ],
    },
    {
      name: "Improvements",
      items: [
        {
          name: "Power Shift Projections",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `One of the neat things I realized about the change requests was that they can allow you to simulate power projections before merging them with the live data. 
              A user could queue up a bunch of changes which impact load distribution into a request, and then they can mask it over the live data state 
              to conduct load assessments.`,
            },
          ],
        },
        {
          name: "Types",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This project was mostly written in javascript. 
        Had I worked on a project of this scale before this experience, I would have certainly included typescript into the stack. 
        Types provide an invaluable form of documentation and structure which this project could have benefitted from.`,
            },
          ],
        },
        {
          name: "Mentors",
          additional: [
            {
              type: DetailTypes.TEXT,
              content: `This project would be an immense undertaking for any solo developer, let alone my recent college graduate self. 
              It was an incredible two year learning opportunity where I had the space to design and make mistakes. 
              After thousands of lines of code written, I had become a significantly better developer than when I had started. 
              However, after all this I still felt I might be missing out on something. 
              I wanted to be able to hold discussion with fellow developers, and receive wisdom from those that have walked before me.
              This role lacked that and I was ready for a change.`,
            },
          ],
        },
      ],
    },
  ],
};

export default DCIM;
