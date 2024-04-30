import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";

const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectView({ projects }) {
  let { project_id } = useParams();

  let project = projects.find((p) => p.getLinkName() === project_id);

  if (!project) {
    return <h2>This project does not exist ... </h2>;
  } else {
    // Bread Crumbs
    let crumbs = [
      { name: "Projects", href: "/projects", current: false },
      { name: `${project.getTitle()}`, href: "#", current: true },
    ];

    let images = project.getImages();

    return (
      <div className="py-5 max-w-screen-xl mx-auto grid grid-cols-1">
        <Navigation pages={crumbs} />

        <div className="bg-white m-8 h-full overflow-hidden">
          {/*<div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">*/}
          <div className="p-8 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
            {/* Product details */}
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
                <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    In stock and ready to ship
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  {/* Display the tab list of images when more than one is available for the project */}
                  {images.length > 1 && (
                    <Tab.List className="grid grid-cols-4 gap-6">
                      {project.getImages().map((image, ndx) => (
                        <Tab
                          key={ndx}
                          className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                        >
                          {({ selected }) => (
                            <>
                              <span className="sr-only">{image}</span>
                              <span className="absolute inset-0 rounded-md overflow-hidden">
                                <img
                                  src={image}
                                  alt=""
                                  className="w-full h-full object-center object-cover"
                                />
                              </span>
                              <span
                                className={classNames(
                                  selected
                                    ? "ring-indigo-500"
                                    : "ring-transparent",
                                  "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  )}
                </div>

                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                  {project.getImages().map((image, ndx) => (
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
            </div>

            {/* Product form */}
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Demo
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
