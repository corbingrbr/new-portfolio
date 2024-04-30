import { CheckIcon } from "@heroicons/react/solid";
import { hasAnImage } from "../utils/utils";

import { Tab } from "@headlessui/react";
import ProjectIconImage from "./ProjectIconImage";

const FeaturedProject = ({ project }) => {
  return !project ? (
    <h2 className="text-gray">No Project to Feature</h2>
  ) : (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8">
        {/* Image(s) */}
        <div className="lg:mt-0 lg:col-start-1 lg:row-span-2">
          {hasAnImage(project) ? (
            <ImageGallery images={project.getImages()} />
          ) : (
            <ProjectIconImage icon={project.getCardIcon()} />
          )}
        </div>

        {/* Project Title, Year, Technologies, and Description */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="">
            <h1 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {project.getTitle()}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {project.getYear()}
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <div role="list" className="grid grid-cols-12 gap-3">
                  {project
                    .getTechnologies()
                    .sort()
                    .map((technology, ndx) => (
                      <img
                        key={ndx}
                        className="m-auto"
                        src={`/assets/icons/${technology}.svg`}
                        alt={`${technology}.svg`}
                        height={24}
                        width={24}
                      />
                    ))}
                </div>
              </div>
            </div>

            {project.hasDescription() && (
              <div className="mt-4 space-y-6">
                <p className="text-left text-base text-gray-500">
                  {project.getCardDescription()}
                </p>
              </div>
            )}

            <form>
              <div className="mt-10">
                <a href={"/projects/" + project.getLinkName()}>
                  <button
                    type="button"
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Read More
                  </button>
                </a>
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
            src={image}
            alt={image}
            className="w-full h-full object-center object-cover sm:rounded-lg"
          />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

export default FeaturedProject;
