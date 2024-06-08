const ArtworkList = ({
  artworks,
  selectedArtwork,
  featuredArtwork,
  setSelectedArtwork,
  setFeaturedArtwork,
}) => {
  return (
    <ul
      role="list"
      className="p-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      {artworks.map((artwork, ndx) => (
        <ArtworkItem
          key={ndx}
          artwork={artwork}
          isSelected={artwork.name === selectedArtwork.name}
          isFeatured={artwork.name === featuredArtwork.name}
          setSelectedArtwork={setSelectedArtwork}
          setFeaturedArtwork={setFeaturedArtwork}
        />
      ))}
    </ul>
  );
};

const ArtworkItem = ({
  artwork,
  isSelected,
  isFeatured,
  setSelectedArtwork,
  setFeaturedArtwork,
}) => (
  <li className="relative" onClick={() => setFeaturedArtwork(artwork)}>
    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
      <img
        src={artwork.source}
        alt=""
        className="pointer-events-none object-cover group-hover:opacity-75"
      />
      <button type="button" className="absolute inset-0 focus:outline-none">
        <span className="sr-only">View details for {artwork.name}</span>
      </button>
    </div>
    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
      {artwork.name}
    </p>
    <p className="pointer-events-none block text-sm font-medium text-gray-500">
      {artwork.month} - {artwork.year}
    </p>
  </li>
);

export default ArtworkList;
