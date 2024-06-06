import React, { useState } from "react";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import FeaturedProject from "./FeaturedProject";
import Navigation from "./Navigation";
import Book from "./Book";

import * as P from "../utils/ProjectUtils";

const filter_data = {
  technology: [
    { value: "ethereum", label: "Ethereum" },
    { value: "react", label: "React" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "webgl", label: "WebGL" },
    { value: "threejs", label: "Three.js" },
    { value: "git", label: "Git" },
    { value: "gsap", label: "GSAP" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "nodejs", label: "Node.js" },
    { value: "mailchimp", label: "Mailchimp" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "unity", label: "Unity" },
    { value: "csharp", label: "C#" },
    { value: "material-ui", label: "Material UI" },
    { value: "sql", label: "SQL" },
    { value: "mongodb", label: "MongoDB" },
    { value: "cpp", label: "C++" },
    { value: "opengl", label: "OpenGL" },
    { value: "processing", label: "Processing" },
    { value: "java", label: "Java" },
    { value: "jquery", label: "JQuery" },
    { value: "c", label: "C" },
    { value: "adafruit", label: "Adafruit" },
  ],
  category: [
    { value: "graphics", icon: "gamepad", label: "Graphics" },
    { value: "embedded", icon: "microchip", label: "Embedded" },
    { value: "blockchain", icon: "link", label: "Blockchain" },
    { value: "frontend", icon: "image", label: "Frontend" },
    { value: "backend", icon: "database", label: "Backend" },
  ],
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
  filter.value == value_to_toggle
    ? { ...filter, checked: !filter.checked }
    : filter;

const projectWithSameTitle = (title) => (project) =>
  title === P.getName(project);

export default function ProjectPortfolio({
  projects,
  isBookOpen,
  setIsBookOpen,
}) {
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

  const projectToShowFirst = "RSI ML Model";

  const [featuredProject, setFeaturedProject] = useState(projectToShowFirst);
  const [selectedProject, setSelectedProject] = useState(projectToShowFirst);

  const [activeBookmark, setActiveBookmark] = useState("projects");

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 h-full">
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
          <div className="lg:mt-0 lg:col-start-2">
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
}

const filterProjects = (projects, selectedTechnologies, selectedCategories) =>
  projects.filter((project) =>
    filterProject(project, selectedTechnologies, selectedCategories)
  );

// TODO: Classify Projects by category and then filter them here
const filterProject = (project, selectedTechnologies, selectedCategories) => {
  const project_technologies = P.getTechnologies(project);

  return selectedTechnologies.every((selected_technology) =>
    project_technologies.includes(selected_technology)
  );
};
