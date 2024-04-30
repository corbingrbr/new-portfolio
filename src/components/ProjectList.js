import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({
  projects,
  selectedProject,
  setSelectedProject,
  featuredProject,
  setFeaturedProject,
}) => {
  return projects.length === 0 ? (
    <h2 className="text-gray">No Projects Found</h2>
  ) : (
    <div className="">
      <ul className="divide-y divide-gray-100 overflow-y-scroll">
        {projects.map((project, ndx) => (
          <ProjectListItem
            key={ndx}
            project={project}
            isSelected={project.getTitle() == selectedProject}
            isFeatured={project.getTitle() == featuredProject}
            setSelectedProject={setSelectedProject}
            setFeaturedProject={setFeaturedProject}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
