import { Fragment, useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { classNames, hasAnImage } from "../utils/utils";

import ProjectIconImage from "./ProjectIconImage";

const product = {
  name: "Zip Tote Basket",
  year: 2024,
  month: 10,
  technologies: 4,
  images: [
    {
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  shortDescription: "",
  longDescription: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Highlights",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Improvements",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
  ],
};

const ProjectView3 = ({ projects }) => {
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
      <div className="max-w-screen-xl mx-auto grid grid-cols-1">
        <Navigation pages={crumbs} />

        <div className="bg-white m-8 h-full overflow-hidden">
          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 text-left">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {/* Product */}
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Project info */}
                <ProjectInformation project={project} />
                {
                  /* Image gallery */
                  hasAnImage(project) ? (
                    <ImageGallery images={project.getImages()} />
                  ) : (
                    <ProjectIconImage icon={project.getCardIcon()} />
                  )
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
};

export default ProjectView3;

const ImageGallery = ({ images }) => (
  <Tab.Group as="div" className="flex flex-col-reverse">
    {/* Image selector */}
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <Tab.List className="grid grid-cols-4 gap-6">
        {images.map((image) => (
          <Tab
            key={image.id}
            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
          >
            {({ selected }) => (
              <>
                {/*<span className="sr-only">{image.name}</span>*/}
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    /*src={image.src}*/
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  className={classNames(
                    selected ? "ring-indigo-500" : "ring-transparent",
                    "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </Tab>
        ))}
      </Tab.List>
    </div>

    <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
      {images.map((image, ndx) => (
        <Tab.Panel key={ndx}>
          <img
            src={image}
            alt={""}
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

const ProjectInformation = ({ project }) => (
  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
      {project.getTitle()}
    </h1>

    <div className="mt-3">
      <h2 className="sr-only">Product information</h2>
      {/*<p className="text-3xl tracking-tight text-gray-900">
                      {product.price}
                    </p>*/}
      <div className="flex items-center">
        <p className="text-lg text-gray-900 sm:text-xl">{project.getYear()}</p>

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
    </div>

    <div className="mt-6">
      <h3 className="sr-only">Description</h3>

      <div
        className="space-y-6 text-base text-gray-700"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </div>

    <form className="mt-6">
      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to bag
        </button>

        <button
          type="button"
          className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>

    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="divide-y divide-gray-200 border-t">
        {product.details.map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(
                        open ? "text-indigo-600" : "text-gray-900",
                        "text-sm font-medium"
                      )}
                    >
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  </div>
);
