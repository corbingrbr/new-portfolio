import React, { useState } from "react";
import ArtworkList from "./ArtworkList";
import FeaturedArtwork from "./FeaturedArtwork";
import Book from "./Book";

import * as A from "../utils/ArtworkUtils";

import artworkCategories from "../artwork-categories";
import artworkTags from "../artwork-tags";

import ProjectFilter from "./ProjectFilter";

const filterData = {
  category: artworkCategories,
  technology: artworkTags,
};

const createDefaultFilterState = (filters) => ({
  category: filters.category.map((cat) => ({ ...cat, checked: false })),
  technology: filters.technology.map((tech) => ({ ...tech, checked: false })),
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

const artworkWithSameTitle = (title) => (artwork) => title === artwork.name;

const filterArtworks = (artworks, selectedTags, selectedCategories) =>
  artworks.filter((artwork) =>
    filterArtwork(artwork, selectedTags, selectedCategories)
  );

// TODO: Classify Projects by category and then filter them here
const filterArtwork = (artwork, selectedTags, selectedCategories) =>
  hasEverySelectedOption(selectedTags, A.getTags(artwork)) &&
  hasEverySelectedOption(selectedCategories, A.getCategories(artwork));

const hasEverySelectedOption = (selectedOptions, projectOptions) =>
  selectedOptions.every((selectedOption) =>
    projectOptions.includes(selectedOption)
  );

const ArtworkPortfolio = ({ artworks, isBookOpen, setIsBookOpen }) => {
  const [filters, setFilters] = useState(createDefaultFilterState(filterData));
  const [sort, setSort] = useState("newest");

  const [isViewingFilters, setIsViewingFilters] = useState(false);

  const selectedTags = filters.technology.filter(isChecked).map(getValue);

  const selectedCategories = filters.category.filter(isChecked).map(getValue);

  let filteredArtworks = filterArtworks(
    artworks,
    selectedTags,
    selectedCategories
  ).sort(sort === "newest" ? A.byNewest : A.byOldest);

  let handleFilterChange = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setFilters({
      category: filters.category.map(toggleChangedFilter(value)),
      technology: filters.technology.map(toggleChangedFilter(value)),
    });
  };

  let handleClearFilters = () => {
    setFilters(createDefaultFilterState(filterData));
  };

  const [featuredArtwork, setFeaturedArtwork] = useState(
    filteredArtworks.length > 0 ? filteredArtworks[0] : artworks[0]
  );
  const [selectedArtwork, setSelectedArtwork] = useState(
    filteredArtworks.length > 0 ? filteredArtworks[0] : artworks[0]
  );

  const [activeBookmark, setActiveBookmark] = useState("artwork");

  return (
    <div className="aspect-[4/3] h-4/5  max-h-[900px]">
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
                project_count={filteredArtworks.length}
                handleViewFilters={() => setIsViewingFilters(!isViewingFilters)}
                isViewingFilters={isViewingFilters}
              />

              {!isViewingFilters && (
                <div className="grow overflow-auto">
                  <ArtworkList
                    artworks={filteredArtworks}
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
