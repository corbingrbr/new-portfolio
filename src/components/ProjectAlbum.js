import React from "react";
import ProjectCard from "./ProjectCard";
import TechnologyIcons from "./TechnologyIcons";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const ProjectAlbum = ({ projects }) => {
  return projects.length === 0 ? (
    <h2 className="text-gray">No Projects</h2>
  ) : (
    <ul
      role="list"
      className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 p-8 pt-0"
    >
      {projects.map((project, ndx) => (
        <ProjectCard project={project} key={ndx} />
      ))}
    </ul>
  );
};

export default ProjectAlbum;
