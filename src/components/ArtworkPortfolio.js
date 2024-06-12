import React, { useState } from "react";
import ArtworkList from "./ArtworkList";
import FeaturedArtwork from "./FeaturedArtwork";
import Book from "./Book";

import * as A from "../utils/ArtworkUtils";
import * as F from "../utils/FilterUtils";

import artworkMediums from "../artwork-mediums";
import artworkTags from "../artwork-tags";

import ProjectFilter from "./ProjectFilter";

const MEDIUMS_NDX = 0;
const TAGS_NDX = 1;

const filterCategories = [
  { label: "Mediums", options: artworkMediums },
  { label: "Tags", options: artworkTags },
];

const artworkWithSameTitle = (title) => (artwork) => title === artwork.name;

const filterArtworks = (artworks, selectedMediums, selectedTags) =>
  artworks.filter((artwork) =>
    filterArtwork(artwork, selectedMediums, selectedTags)
  );

// TODO: Classify Projects by category and then filter them here
const filterArtwork = (artwork, selectedMediums, selectedTags) =>
  F.hasEverySelectedOption(selectedTags, A.getTags(artwork)) &&
  F.hasEverySelectedOption(selectedMediums, A.getMediums(artwork));

const ArtworkPortfolio = ({ artworks, isBookOpen, setIsBookOpen }) => {
  const [filters, setFilters] = useState(
    F.createDefaultFilterState(filterCategories)
  );
  const [sort, setSort] = useState("newest");

  const [isViewingFilters, setIsViewingFilters] = useState(false);

  let filteredArtworks = filterArtworks(
    artworks,
    filters[MEDIUMS_NDX].options.filter(F.isChecked).map(F.getValue),
    filters[TAGS_NDX].options.filter(F.isChecked).map(F.getValue)
  ).sort(sort === "newest" ? A.byNewest : A.byOldest);

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
                filterCategories={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                setSort={setSort}
                current_sort={sort}
                active_filter_count={F.countActiveFilters(filters)}
                project_count={filteredArtworks.length}
                handleViewFilters={() => setIsViewingFilters(!isViewingFilters)}
                isViewingFilters={isViewingFilters}
                color="sky-600"
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
