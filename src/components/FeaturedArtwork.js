import { Tab } from "@headlessui/react";
import ProjectIconImage from "./ProjectIconImage";
import * as P from "../utils/ProjectUtils";
import { Link } from "react-router-dom";

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
            {P.getName(artwork.name)}
          </h1>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {artwork.month} - {artwork.year}
              </p>

              {/*<div className="ml-4 pl-4 border-l border-gray-300">
                <div role="list" className="grid grid-cols-12 gap-3">
                  {P.getTechnologies(project)
                    .sort()
                    .map((technology, ndx) => (
                      <img
                        key={ndx}
                        className="m-auto"
                        src={`/assets/icons/${technology}.svg`}
                        alt={`${technology}.svg`}
                        height={24}
                        width={24}
                        data-tooltip-target={`${technology}-popover`}
                      />
                    ))}
                </div>
              </div>*/}
            </div>

            <div className="mt-4 space-y-6">
              <p
                className="text-left text-base text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: "My artwork's short description",
                }}
              ></p>
            </div>

            {/*<form>
              <div className="mt-10 flex">
                <Link
                  to={"/projects/" + P.getProjectLink(project)}
                  className="flex-grow"
                >
                  <button
                    type="button"
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Read More
                  </button>
                </Link>

                {P.hasRepositoryLink(project) && (
                  <a href={P.getRepositoryLink(project)}>
                    <button
                      type="button"
                      className="w-full ml-4 border border-transparent rounded-md py-2 px-3 flex items-center justify-center text-base font-medium  bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-600"
                    >
                      <i className="fa-brands fa-github fa-2x"></i>
                      <span className="sr-only">Go to repository</span>
                    </button>
                  </a>
                )}
              </div>
                </form>*/}
          </section>
        </div>
      </div>
    </div>
  );
};

/*const ImageGallery = ({ images }) => (
  
);*/

export default FeaturedArtwork;
