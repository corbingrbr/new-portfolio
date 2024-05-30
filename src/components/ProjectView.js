import { Fragment, useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { classNames } from "../utils/utils";

import ProjectIconImage from "./ProjectIconImage";

import * as P from "../utils/ProjectUtils";

const ProjectView3 = ({ projects }) => {
  let { project_id } = useParams();

  let project = projects.find((p) => P.getProjectLink(p) === project_id);

  if (!project) {
    return <h2>This project does not exist ... </h2>;
  } else {
    // Bread Crumbs
    let crumbs = [
      { name: "Projects", href: "/projects", current: false },
      { name: `${P.getName(project)}`, href: "#", current: true },
    ];

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
                  P.hasAnImage(project) ? (
                    <ImageGallery images={P.getImages(project)} />
                  ) : (
                    <ProjectIconImage icon={P.getIcon(project)} />
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
        {images.map((image, ndx) => (
          <Tab
            key={ndx}
            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
          >
            {({ selected }) => (
              <>
                <span className="sr-only">{image.name}</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
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
            src={image.src}
            alt={image.alt}
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
      {P.getName(project)}
    </h1>

    <div className="mt-3">
      <h2 className="sr-only">Product information</h2>
      {/*<p className="text-3xl tracking-tight text-gray-900">
                      {product.price}
                    </p>*/}
      <div className="flex items-center">
        <p className="text-lg text-gray-900 sm:text-xl">{P.getYear(project)}</p>

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
                />
              ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="sr-only">Short Description</h3>

      <div
        className="prose prose-sm mt-4 text-gray-500"
        dangerouslySetInnerHTML={{ __html: P.getShortDescription(project) }}
      />
    </div>

    <div className="mt-6">
      <h3 className="sr-only">Long Description</h3>

      <div
        className="prose prose-sm mt-4 text-gray-500"
        dangerouslySetInnerHTML={{ __html: P.getFullDescription(project) }}
      />
    </div>

    <form className="mt-6 flex flex-row justify-start">
      {P.getViewLinks(project).map((viewLink, ndx) => (
        <a
          href={viewLink.url}
          target="_blank"
          key={ndx}
          className={ndx > 0 ? "ml-4" : ""}
        >
          <button
            type="button"
            className={
              "items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
            }
          >
            {viewLink.label}
          </button>
        </a>
      ))}

      {P.hasRepositoryLink(project) && (
        <a
          href={P.getRepositoryLink(project)}
          target="_blank"
          className={P.hasViewLinks(project) ? "ml-4" : ""}
        >
          <button
            type="button"
            className={classNames(
              "flex items-center justify-center rounded-md border border-transparent py-2 px-3 text-base font-medium text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-500"
            )}
          >
            <i className="fa-brands fa-github fa-2x"></i>
            <span className="sr-only">Go to repository</span>
          </button>
        </a>
      )}
    </form>

    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="divide-y divide-gray-200 border-t">
        {P.getDetails(project).map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6">
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
                      <li key={item}>
                        <p className="font-medium">{item.name}</p>
                        <p>{item.additional}</p>
                        {/*<p>
                          This is some information about feature one. It is very
                          detailed and therefore requires a lot of commentary on
                          the matter.
                        </p>
                        <span className="not-prose">
                          <CodeBlock
                            language="typescript"
                            text={`const addTwo = (x: number): number => x + 2;`}
                            theme={atomOneDark}
                            showLineNumbers={false}
                          />
                          <p>
                            Here I am resuming the conversation once more after
                            some thoughtful code shared above.
                    </p>
                    </span>*/}
                      </li>
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
