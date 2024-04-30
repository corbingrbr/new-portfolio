import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FilterIcon, QrcodeIcon, LightBulbIcon, FolderIcon, } from '@heroicons/react/solid'


const sortOptions = [
    { value: 'newest', name: 'Newest' },
    { value: 'oldest', name: 'Oldest' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProjectFilter({ filters, onFilterChange, onClearFilters, setSort, current_sort, project_count, active_filter_count }) {

    return (
        <div className="bg-gray-100 p-8">
            <Disclosure as="section" aria-labelledby="filter-heading" className="relative z-10 border-t border-b border-gray-200 grid items-center">

                <div className="row-start-1 py-4">
                    <div className="justify-start max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">

                        <div className="group flex items-center">
                            <FolderIcon
                                className="flex-none w-5 h-5 mr-2 text-gray-400 "
                                aria-hidden="true"
                            />
                            {project_count} Projects
                        </div>

                        <div>
                            <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                                <FilterIcon
                                    className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                {active_filter_count > 0 ? `${active_filter_count} Filters` : 'Filter'}
                            </Disclosure.Button>
                        </div>
                        <div className="pl-6">
                            <button onClick={onClearFilters} type="button" className="text-gray-500">
                                Clear all
                            </button>
                        </div>

                    </div>
                </div>
                <Disclosure.Panel className="border-t border-gray-200 py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid grid-cols-4 gap-y-10 auto-rows-min">
                            <fieldset>
                                <legend className="text-left block font-medium">Category</legend>
                                {/*<div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">*/}
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.category.map((option, ndx) => (
                                        <div key={option.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                id={`category-${ndx}`}
                                                name="category[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                checked={option.checked}
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                onChange={onFilterChange}
                                            />

                                            <span className="ml-2"><i className={`m-auto w-5 h-5 fas fa-${option.icon} text-gray-400 align-middle`} /></span>
                                            <label htmlFor={`category-${ndx}`} className="text-left ml-3 min-w-0 flex-1 text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset className="col-span-3">
                                <legend className="text-left block font-medium">Technology</legend>
                                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.technology.map((technology, ndx) => (
                                        <div key={technology.value} className="flex items-center text-base sm:text-sm">
                                            <input
                                                id={`technology-${ndx}`}
                                                name="technology[]"
                                                defaultValue={technology.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                checked={technology.checked}
                                                onChange={onFilterChange}
                                            />

                                            <img key={ndx} className="ml-2" src={`/assets/icons/${technology.value}.svg`} alt={`${technology.value}.svg`} height={24} width={24} />
                                            <label htmlFor={`technology-${ndx}`} className="text-left ml-3 min-w-0 flex-1 text-gray-600">
                                                {technology.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </Disclosure.Panel>
                <div className="row-start-1 py-4">
                    <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                            <Menu.Item key={ndx} >
                                                <span
                                                    type="button"
                                                    onClick={() => setSort(option.value)}
                                                    className={classNames(
                                                        "cursor-pointer",
                                                        option.value == current_sort ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        option.value == current_sort ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm'
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
            </Disclosure >
        </div>
    )
}
