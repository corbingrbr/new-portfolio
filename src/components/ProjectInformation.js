import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { classNames } from "../utils/utils";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import * as P from "../utils/ProjectUtils";

const ProjectInformation = ({ project }) => (
  <div className="left-page text-left ">
    <div className="mt-10 px-4 sm:mt-5 sm:px-0 lg:mt-0  pb-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {P.getName(project)}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        {/*<p className="text-3xl tracking-tight text-gray-900">
                      {product.price}
                    </p>*/}
        <div className="flex items-center">
          <p className="text-lg text-gray-900 sm:text-xl">
            {P.getYear(project)}
          </p>

          <div className="ml-4 pl-4 border-l border-gray-300">
            <div role="list" className="grid grid-cols-12 gap-3">
              {P.getTechnologies(project).map((technology, ndx) => (
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
    </div>

    <div className="overflow-y-auto max-h-[700px] bg-gray-100 p-4">
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

      <section aria-labelledby="details-heading" className="mt-4">
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
                          {item.additional &&
                            item.additional.map((a) =>
                              a.type == "code" ? (
                                <p>
                                  <NonProseCodeBlock
                                    text={a.content}
                                    language={a.language}
                                  />
                                </p>
                              ) : (
                                <p>{a.content}</p>
                              )
                            )}
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
  </div>
);

export default ProjectInformation;

const NonProseCodeBlock = ({ language, text }) => (
  <span className="not-prose">
    <CodeBlock
      language={language}
      text={text}
      theme={atomOneDark}
      showLineNumbers={false}
    />
  </span>
);
