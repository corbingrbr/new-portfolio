import React, { useState } from "react";

import ProjectFilter from "./ProjectFilter";
import ProjectList from "./ProjectList";
import ArtworkList from "./ArtworkList";
import FeaturedArtwork from "./FeaturedArtwork";
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

const artworkWithSameTitle = (title) => (artwork) => title === artwork.name;

const ArtworkPortfolio = ({ artworks, isBookOpen, setIsBookOpen }) => {
  //const [filters, setFilters] = useState(createDefaultFilterState(filter_data));
  //const [sort, setSort] = useState("newest");

  const [isViewingFilters, setIsViewingFilters] = useState(false);

  /*const selectedTechnologies = filters.technology
    .filter(isChecked)
    .map(getValue);
  const selectedCategories = filters.category.filter(isChecked).map(getValue);
  
  /*let filteredProjects = filterProjects(
    projects,
    selectedTechnologies,
    selectedCategories
  ).sort(sort === "newest" ? P.byNewest : P.byOldest);

  /*let handleFilterChange = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setFilters({
      technology: filters.technology.map(toggleChangedFilter(value)),
      category: filters.category.map(toggleChangedFilter(value)),
    });
  };*/

  /*let handleClearFilters = () => {
    setFilters(createDefaultFilterState(filter_data));
  };*/

  const projectToShowFirst = "RSI ML Model";

  const [featuredArtwork, setFeaturedArtwork] = useState(artworks[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(artworks[0]);

  const [activeBookmark, setActiveBookmark] = useState("artwork");

  return (
    <div className="aspect-[4/3] h-4/5  max-h-[900px]">
      <Book
        isOpen={isBookOpen}
        setIsOpen={setIsBookOpen}
        leftPage={
          <div className="left-page h-full overflow-hidden rounded-2xl">
            <div className="flex flex-col h-full">
              {/*<ProjectFilter
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                setSort={setSort}
                current_sort={sort}
                active_filter_count={countActiveFilters(filters)}
                project_count={filteredProjects.length}
                handleViewFilters={() => setIsViewingFilters(!isViewingFilters)}
                isViewingFilters={isViewingFilters}
        />*/}

              {!isViewingFilters && (
                <div className="grow overflow-auto">
                  <ArtworkList
                    artworks={artworks}
                    selectedArtwork={selectedArtwork}
                    featuredArtwork={featuredArtwork}
                    setSelectedArtwork={setSelectedArtwork}
                    setFeaturedArtwork={setFeaturedArtwork}
                  />
                </div>
              )}
            </div>
          </div>
        }
        rightPage={
          <div className="h-full overflow-hidden rounded-2xl">
            <FeaturedArtwork
              artwork={artworks.find(
                artworkWithSameTitle(
                  featuredArtwork.name || selectedArtwork.name
                )
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

export default ArtworkPortfolio;

/*const filterProjects = (projects, selectedTechnologies, selectedCategories) =>
  projects.filter((project) =>
    filterProject(project, selectedTechnologies, selectedCategories)
  );

// TODO: Classify Projects by category and then filter them here
const filterProject = (project, selectedTechnologies, selectedCategories) => {
  const project_technologies = P.getTechnologies(project);

  return selectedTechnologies.every((selected_technology) =>
    project_technologies.includes(selected_technology)
  );
};*/
