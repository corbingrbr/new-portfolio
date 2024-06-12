import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { classNames } from "../utils/utils";
import {
  ChevronDownIcon,
  FilterIcon,
  FolderIcon,
} from "@heroicons/react/solid";
import { filter } from "fp-ts/lib/ReadonlyNonEmptyArray";

const sortOptions = [
  { value: "newest", name: "Newest" },
  { value: "oldest", name: "Oldest" },
];

const ProjectFilter = ({
  filterCategories,
  onFilterChange,
  onClearFilters,
  setSort,
  currentSort,
  projectCount,
  activeFilterCount,
  handleViewFilters,
  isViewingFilters,
}) => {
  console.log("ACTIVE FC", activeFilterCount);
  return (
    <div
      className={classNames(
        "bg-gray-200 ",
        isViewingFilters ? "rounded-2xl h-full" : "rounded-t-2xl"
      )}
    >
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="relative z-10  border-gray-300 grid items-center"
      >
        <div className="row-start-1 py-4 border-b border-gray-300">
          <div className="justify-start max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-0 lg:px-2">
            <div className="group flex items-center">
              <FolderIcon
                className="flex-none w-5 h-5 mr-2 text-gray-400 "
                aria-hidden="true"
              />
              {projectCount} Projects
            </div>

            <div>
              <Disclosure.Button
                className="group text-gray-700 font-medium flex items-center pl-6"
                onClick={handleViewFilters}
              >
                <FilterIcon
                  className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                {activeFilterCount > 0
                  ? `${activeFilterCount} Filters`
                  : "Filter"}
              </Disclosure.Button>
            </div>
            <div className="pl-6">
              <button
                onClick={onClearFilters}
                type="button"
                className="text-gray-500"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="py-5 h-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid gap-y-10 auto-rows-min">
              {filterCategories.map((category, ndx) => (
                <FilterFieldSet
                  key={ndx}
                  label={category.label}
                  options={category.options}
                  onFilterChange={onFilterChange}
                />
              ))}
              {/*<fieldset>
                <legend className="text-left block font-medium">
                  Category
                </legend>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pt-6">
                  {filters.category.map((category, ndx) => (
                    <div
                      key={category.value}
                      className={classNames(
                        "flex items-center text-base sm:text-sm hover:bg-gray-100 rounded-md p-2 m-2",
                        category.checked ? "bg-white" : "bg-gray-300"
                      )}
                      data-value={category.value}
                      onClick={onFilterChange}
                    >
                      <span className="ml-2">
                        <i
                          className={`m-auto w-5 h-5 fas fa-${category.icon} text-gray-400 align-middle`}
                        />
                      </span>
                      <label
                        htmlFor={`category-${ndx}`}
                        className="lg:text-md text-left ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-left block font-medium">
                  Technology
                </legend>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pt-6 sm:pt-4">
                  {filters.technology.map((technology, ndx) => (
                    <div
                      key={technology.value}
                      className={classNames(
                        "flex items-center text-base sm:text-sm hover:bg-gray-100 rounded-md p-1 m-2",
                        technology.checked ? "bg-white" : "bg-gray-300"
                      )}
                      data-value={technology.value}
                      onClick={onFilterChange}
                    >
                      <img
                        key={ndx}
                        className="ml-2"
                        src={`/assets/icons/${technology.value}.svg`}
                        alt={`${technology.value}.svg`}
                        height={24}
                        width={24}
                      />
                      <label
                        htmlFor={`technology-${ndx}`}
                        className="text-left ml-3 min-w-0 flex-1 text-gray-600"
                      >
                        {technology.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>*/}
            </div>
          </div>
        </Disclosure.Panel>
        <div className="row-start-1 py-4 border-b border-gray-300">
          <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option, ndx) => (
                      <Menu.Item key={ndx}>
                        <span
                          type="button"
                          onClick={() => setSort(option.value)}
                          className={classNames(
                            "cursor-pointer",
                            option.value === currentSort
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            option.value === currentSort ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </span>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

const FilterFieldSet = ({ label, options, onFilterChange }) => {
  return (
    <fieldset key={label}>
      <legend className="text-left block font-medium">{label}</legend>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 pt-6">
        {options.map((option, ndx) => (
          <FilterOption
            key={ndx}
            option={option}
            onFilterChange={onFilterChange}
          />
        ))}
      </div>
    </fieldset>
  );
};

const FilterOption = ({ option, onFilterChange }) => (
  <div
    key={option.value}
    className={classNames(
      "flex items-center text-base sm:text-sm hover:bg-gray-100 rounded-md p-2 m-2",
      option.checked ? "bg-white" : "bg-gray-300"
    )}
    data-value={option.value}
    onClick={onFilterChange}
  >
    {option.icon && (
      <span className="ml-2">
        <i
          className={`m-auto w-5 h-5 fas fa-${option.icon} text-gray-400 align-middle`}
        />
      </span>
    )}
    {option.img && (
      <img
        className="ml-2"
        src={option.img}
        alt={option.img}
        height={24}
        width={24}
      />
    )}

    <label
      htmlFor={`${option.label}`}
      className="lg:text-md text-left ml-3 min-w-0 flex-1 text-gray-600"
    >
      {option.label}
    </label>
  </div>
);

export default ProjectFilter;
