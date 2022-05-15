import React, { useState } from 'react';

//import Chips from 'react-chips';
import { HomeIcon } from '@heroicons/react/solid'

import ProjectAlbum from './ProjectAlbum';

const ProjectPortfolio = ({ projects }) => {

    const [chips, setChips] = useState([]);

    let uniqueTechnologies = [...new Set(projects.reduce((technologies, project) => technologies.concat(project.getTechnologies()), []))].sort()
    let filteredProjects = filterProjectsByChips(projects, chips);

    return (
        <div className="pt-5 bg-gray-100">
            {nav()}
            {/*header()*/}

            {/*
                <div className="row justify-content-center">
                    <div className="col-md-4 p-0">
                        <Chips
                            value={chips}
                            onChange={setChips}
                            suggestions={uniqueTechnologies}
                        />
                    </div>
                </div>
            */}

            {/*<div className="row justify-content-center mt-2">
                <div className="col-lg-4 col-md-8 col-sm-12 shadow-sm pr-4 pl-4 pt-2 pb-2 bg-light rounded">
                    <SelectableTechnologies technologies={uniqueTechnologies} onSelect={(ndx) => setChips(chips.concat([uniqueTechnologies[ndx]]))} />
                </div>
        </div>*/}


            <ProjectAlbum projects={filteredProjects} />
        </div >
    );
}

const nav = () => (
    <nav className="flex m-8" aria-label="Breadcrumb">
        <ol role="list" className="bg-white rounded-md shadow px-6 flex space-x-4">
            <li className="flex">
                <div className="flex items-center">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                    </a>
                </div>
            </li>
            {
                [
                    { name: 'Projects', href: '#', current: false },
                    { name: 'Project Nero', href: '#', current: true },
                ].map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="flex-shrink-0 w-6 h-full text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
        </ol>
    </nav>
)

const header = () =>
(<div className="bg-gray-700 m-8 rounded">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Projects
            </h2>
            {/*
            <p className="mt-5 text-xl text-gray-400">
                In all their glory ...
            </p>
            */}
        </div>
    </div>
</div>
)

const filterProjectsByChips = (projects, chips) => projects.filter(project => filterProjectByChips(project, chips))

const filterProjectByChips = (project, chips) => {
    const technologies = project.getTechnologies();

    return chips.every(chip => technologies.includes(chip));
}

const SelectableTechnologies = ({ technologies, onSelect }) => (
    <div className="row">
        {technologies.map((technology, ndx) => <SelectableTechnology key={ndx} technology={technology} onSelect={onSelect} id={ndx} />)}
    </div>
)

const SelectableTechnology = ({ technology, onSelect, id }) => (
    <div className="col-sm-1 p-2 technology-select rounded text-center" id={id} onClick={(e) => onSelect(id)}>
        <span>
            <img src={`/assets/icons/${technology}.svg`} alt={`${technology}.svg`} height={24} width={24} />
        </span>
    </div>
)

export default ProjectPortfolio