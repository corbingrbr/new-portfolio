import Project from "../interfaces/project.interface";

export const classNames = (...classes: any[]) =>
  classes.filter(Boolean).join(" ");
