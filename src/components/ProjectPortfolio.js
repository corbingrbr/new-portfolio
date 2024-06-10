import React, { useState } from "react";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import FeaturedProject from "./FeaturedProject";
import Book from "./Book";

import * as P from "../utils/ProjectUtils";

import projectTechnologies from "../project-technologies";
import projectCategories from "../project-categories";

const filter_data = {
  technology: projectTechnologies,
  category: projectCategories,
};

const createDefaultFilterState = (filters) => ({
  technology: filters.technology.map((tech) => ({ ...tech, checked: false })),
  category: filters.category.map((cat) => ({ ...cat, checked: false })),
});

const countActiveFilters = (filters) =>
  [...filters.technology, ...filters.category].filter(
    (filter) => filter.checked
  ).length;

const isChecked = (option) => option.checked;
const getValue = (filter) => filter.value;

let toggleChangedFilter = (value_to_toggle) => (filter) =>
  filter.value === value_to_toggle
    ? { ...filter, checked: !filter.checked }
    : filter;

const projectWithSameTitle = (title) => (project) =>
  title === P.getName(project);

const filterProjects = (projects, selectedTechnologies, selectedCategories) =>
  projects.filter((project) =>
    filterProject(project, selectedTechnologies, selectedCategories)
  );

// TODO: Classify Projects by category and then filter them here
const filterProject = (project, selectedTechnologies, selectedCategories) =>
  hasEverySelectedOption(selectedTechnologies, P.getTechnologies(project)) &&
  hasEverySelectedOption(selectedCategories, P.getCategories(project));

const hasEverySelectedOption = (selectedOptions, projectOptions) =>
  selectedOptions.every((selectedOption) =>
    projectOptions.includes(selectedOption)
  );

const ProjectPortfolio = ({ projects, isBookOpen, setIsBookOpen }) => {
  const [filters, setFilters] = useState(createDefaultFilterState(filter_data));
  const [sort, setSort] = useState("newest");

  const [isViewingFilters, setIsViewingFilters] = useState(false);

  const selectedTechnologies = filters.technology
    .filter(isChecked)
    .map(getValue);

  const selectedCategories = filters.category.filter(isChecked).map(getValue);

  let filteredProjects = filterProjects(
    projects,
    selectedTechnologies,
    selectedCategories
  ).sort(sort === "newest" ? P.byNewest : P.byOldest);

  let handleFilterChange = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setFilters({
      technology: filters.technology.map(toggleChangedFilter(value)),
      category: filters.category.map(toggleChangedFilter(value)),
    });
  };

  let handleClearFilters = () => {
    setFilters(createDefaultFilterState(filter_data));
  };

  const [featuredProject, setFeaturedProject] = useState(
    P.getName(projects[0])
  );

  const [selectedProject, setSelectedProject] = useState(
    P.getName(projects[0])
  );

  const [activeBookmark, setActiveBookmark] = useState("projects");

  return (
    <div className="aspect-[4/3] h-4/5  max-h-[900px]">
      {/*<Navigation
        pages={[
          { name: "Projects", href: "/", current: true, color: "#4F45E4" },
        ]}
      />*/}

      <Book
        isOpen={isBookOpen}
        setIsOpen={setIsBookOpen}
        leftPage={
          <div className="left-page h-full overflow-hidden rounded-2xl">
            <div className="flex flex-col h-full">
              <ProjectFilter
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                setSort={setSort}
                current_sort={sort}
                active_filter_count={countActiveFilters(filters)}
                project_count={filteredProjects.length}
                handleViewFilters={() => setIsViewingFilters(!isViewingFilters)}
                isViewingFilters={isViewingFilters}
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
              project={projects.find(
                projectWithSameTitle(featuredProject || selectedProject)
              )}
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
