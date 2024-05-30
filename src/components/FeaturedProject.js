import { Tab } from "@headlessui/react";
import ProjectIconImage from "./ProjectIconImage";
import * as P from "../utils/ProjectUtils";
import { Link } from "react-router-dom";

const FeaturedProject = ({ project }) => {
  return !project ? (
    <h2 className="text-gray">No Project to Feature</h2>
  ) : (
    <div className="bg-white">
      <div className="mx-auto lg:grid lg:grid-cols-1 lg:gap-x-8">
        {/* Image(s) */}
        <div className="lg:mt-0 lg:col-start-1 lg:row-span-2">
          {P.hasAnImage(project) ? (
            <ImageGallery images={P.getImages(project)} />
          ) : (
            <ProjectIconImage icon={P.getIcon(project)} />
          )}
        </div>

        {/* Project Title, Year, Technologies, and Description */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="">
            <h1 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {P.getName(project)}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {P.getYear(project)}
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
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
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p
                className="text-left text-base text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: P.getShortDescription(project),
                }}
              ></p>
            </div>

            <form>
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
                      className="w-full ml-4 border border-transparent rounded-md py-2 px-3 flex items-center justify-center text-base font-medium text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-500"
                    >
                      <i className="fa-brands fa-github fa-2x"></i>
                      <span className="sr-only">Go to repository</span>
                    </button>
                  </a>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => (
  <Tab.Group as="div" className="flex flex-col-reverse">
    <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
      {images.map((image, ndx) => (
        <Tab.Panel key={ndx}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-center object-cover sm:rounded-lg"
          />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

export default FeaturedProject;
