const FeaturedArtwork = ({ artwork }) => {
  return !artwork ? (
    <h2 className="text-gray">No Project to Feature</h2>
  ) : (
    <div className="bg-white">
      <div className="mx-auto lg:grid lg:grid-cols-1 lg:gap-x-8">
        {/* Image(s) */}
        <div className="lg:mt-0 lg:col-start-1 lg:row-span-2">
          {/*<ImageGallery images={P.getImages(project)} />*/}
          <div className="flex">
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={artwork.source}
                alt={artwork.alt}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Project Title, Year, Technologies, and Description */}
        <div className="lg:max-w-lg lg:self-end">
          <h1 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {artwork.name}
          </h1>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {artwork.month}/{artwork.day}/{artwork.year}
              </p>
            </div>

            {artwork.description && (
              <div className="mt-4 space-y-6">
                <p
                  className="text-left text-base text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: "My artwork's short description",
                  }}
                ></p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

/*const ImageGallery = ({ images }) => (
  
);*/

export default FeaturedArtwork;
