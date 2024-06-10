import * as N from "fp-ts/number";
import { fromCompare, Ord, contramap } from "fp-ts/Ord";
import { pipe } from "fp-ts/function";

import Project from "../interfaces/project.interface";
import Image from "../interfaces/image.interface";
import DetailSection from "../interfaces/detail-section.interface";
import ViewLink from "../interfaces/view-link.interface";

export const getName = (project: Project): string => project.name;
export const getProjectLink = (project: Project): string => project.projectLink;
export const getYear = (project: Project): number => project.year;
export const getMonth = (project: Project): number => project.month;
export const getTechnologies = (project: Project): string[] =>
  project.technologies;
export const getCategories = (project: Project): string[] => project.categories;
export const hasRepositoryLink = (project: Project): boolean =>
  project.repositoryLink != undefined && project.repositoryLink !== "";
export const getRepositoryLink = (project: Project): string =>
  project.repositoryLink;
export const hasAnImage = (project: Project): boolean =>
  project.images.length > 0;
export const getImages = (project: Project): Image[] => project.images;
export const getIcon = (project: Project): string => project.icon;
export const getShortDescription = (project: Project): string =>
  project.shortDescription;
export const getFullDescription = (project: Project): string =>
  project.longDescription;
export const getDetails = (project: Project): DetailSection[] =>
  project.details;
export const hasViewLinks = (project: Project): boolean =>
  project.viewLinks.length > 0;
export const getViewLinks = (project: Project): ViewLink[] => project.viewLinks;

const byYear = pipe(N.Ord, contramap(getYear));

const byMonth = pipe(N.Ord, contramap(getMonth));

export const byDate: Ord<Project> = fromCompare(
  (first: Project, second: Project) =>
    byYear.compare(first, second) || byMonth.compare(first, second)
);

export const byNewest = (a: Project, b: Project) => -byDate.compare(a, b);
export const byOldest = (a: Project, b: Project) => byDate.compare(a, b);
