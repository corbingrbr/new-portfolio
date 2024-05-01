import Project from "../interfaces/project.interface";
import Image from "../interfaces/image.interface";
import DetailSection from "../interfaces/detail-section.interface";

const ProjectUtils = {
  getName: (project: Project): string => project.name,
  getProjectLink: (project: Project): string => project.projectLink,
  getYear: (project: Project): number => project.year,
  getMonth: (project: Project): number => project.month,
  getTechnologies: (project: Project): string[] => project.technologies,
  hasRepositoryLink: (project: Project): boolean =>
    project.repositoryLink != undefined && project.repositoryLink !== "",
  getRepositoryLink: (project: Project): string => project.repositoryLink,
  hasAnImage: (project: Project): boolean => project.images.length > 0,
  getImages: (project: Project): Image[] => project.images,
  getIcon: (project: Project): string => project.icon,
  getShortDescription: (project: Project): string => project.shortDescription,
  getFullDescription: (project: Project): string => project.longDescription,
  getDetails: (project: Project): DetailSection[] => project.details,
};

export default ProjectUtils;
