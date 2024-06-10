import React, { useState } from "react";
import ArtworkList from "./ArtworkList";
import FeaturedArtwork from "./FeaturedArtwork";
import Book from "./Book";

const artworkWithSameTitle = (title) => (artwork) => title === artwork.name;

const ArtworkPortfolio = ({ artworks, isBookOpen, setIsBookOpen }) => {
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
              <div className="grow overflow-auto">
                <ArtworkList
                  artworks={artworks}
                  selectedArtwork={selectedArtwork}
                  featuredArtwork={featuredArtwork}
                  setSelectedArtwork={setSelectedArtwork}
                  setFeaturedArtwork={setFeaturedArtwork}
                />
              </div>
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
