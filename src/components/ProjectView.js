import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Book from "./Book";
import ProjectInformation from "./ProjectInformation";
import ImageGallery from "./ImageGallery";
import ProjectIconImage from "./ProjectIconImage";

import * as P from "../utils/ProjectUtils";

const ProjectView3 = ({ projects, isBookOpen, setIsBookOpen }) => {
  let { project_id } = useParams();

  let project = projects.find((p) => P.getProjectLink(p) === project_id);

  if (!project) {
    return <h2>This project does not exist ... </h2>;
  } else {
    // Bread Crumbs
    let crumbs = [
      { name: "Projects", href: "/projects", current: false, color: "#4F45E4" },
      { name: `${P.getName(project)}`, href: "#", current: true },
    ];

    return (
      <div className="max-w-screen-xl mx-auto grid grid-cols-1">
        <Navigation pages={crumbs} />

        <Book
          isOpen={isBookOpen}
          setIsOpen={setIsBookOpen}
          leftPage={<ProjectInformation project={project} />}
          rightPage={
            /* Image gallery */
            P.hasAnImage(project) ? (
              <ImageGallery images={P.getImages(project)} />
            ) : (
              <ProjectIconImage icon={P.getIcon(project)} />
            )
          }
          activeBookmark={"projects"}
        />
      </div>
    );
  }
};

export default ProjectView3;
