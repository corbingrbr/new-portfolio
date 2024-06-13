import React, { useState } from "react";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import FeaturedProject from "./FeaturedProject";
import Book from "./Book";

import * as P from "../utils/ProjectUtils";
import * as F from "../utils/FilterUtils";

import projectTechnologies from "../project-technologies";
import projectCategories from "../project-categories";

const CATEGORIES_NDX = 0;
const TECHNOLOGIES_NDX = 1;

const filterCategories = [
  { label: "Categories", options: projectCategories },
  { label: "Technologies", options: projectTechnologies },
];

const projectWithSameTitle = (title) => (project) =>
  title === P.getName(project);

const filterProjects = (projects, selectedCategories, selectedTechnologies) =>
  projects.filter((project) =>
    filterProject(project, selectedCategories, selectedTechnologies)
  );

// TODO: Classify Projects by category and then filter them here
const filterProject = (project, selectedCategories, selectedTechnologies) =>
  F.hasEverySelectedOption(selectedCategories, P.getCategories(project)) &&
  F.hasEverySelectedOption(selectedTechnologies, P.getTechnologies(project));

const ProjectPortfolio = ({ projects, isBookOpen, setIsBookOpen }) => {
  const [filters, setFilters] = useState(
    F.createDefaultFilterState(filterCategories)
  );
  const [sort, setSort] = useState("newest");

  const [isViewingFilters, setIsViewingFilters] = useState(false);

  let filteredProjects = filterProjects(
    projects,
    filters[CATEGORIES_NDX].options.filter(F.isChecked).map(F.getValue),
    filters[TECHNOLOGIES_NDX].options.filter(F.isChecked).map(F.getValue)
  ).sort(sort === "newest" ? P.byNewest : P.byOldest);

  let handleFilterChange = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setFilters(
      filters.map((category) => ({
        ...category,
        options: category.options.map(F.toggleChangedFilter(value)),
      }))
    );
  };

  let handleClearFilters = () => {
    setFilters(F.createDefaultFilterState(filterCategories));
  };

  const [featuredProject, setFeaturedProject] = useState(
    filteredProjects.length > 0 ? P.getName(filteredProjects[0]) : projects[0]
  );

  const [selectedProject, setSelectedProject] = useState(
    filteredProjects.length > 0 ? P.getName(filteredProjects[0]) : projects[0]
  );

  const [activeBookmark, setActiveBookmark] = useState("projects");

  return (
    <div className="aspect-[4/3] h-4/5  max-h-[900px]">
      <Book
        isOpen={isBookOpen}
        setIsOpen={setIsBookOpen}
        leftPage={
          <div className="left-page h-full overflow-hidden rounded-2xl">
            <div className="flex flex-col h-full">
              <ProjectFilter
                filterCategories={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                setSort={setSort}
                currentSort={sort}
                activeFilterCount={F.countActiveFilters(filters)}
                projectCount={filteredProjects.length}
                setIsViewingFilters={setIsViewingFilters}
                isViewingFilters={isViewingFilters}
                color={"indigo-600"}
              />

              {!isViewingFilters && (
                <div className="grow overflow-auto">
                  <ProjectList
                    projects={filteredProjects}
                    selectedProject={selectedProject}
                    featuredProject={featuredProject}
                    setSelectedProject={setSelectedProject}
                    setFeaturedProject={setFeaturedProject}
                  />
                </div>
              )}
            </div>
          </div>
        }
        rightPage={
          <div className="h-full overflow-hidden rounded-2xl">
            <FeaturedProject
              project={projects.find(projectWithSameTitle(selectedProject))}
            />
          </div>
        }
        activeBookmark={activeBookmark}
        setActiveBookmark={setActiveBookmark}
      />
    </div>
  );
};

export default ProjectPortfolio;
