import React from 'react';
import ProjectCard from './ProjectCard'
import TechnologyIcons from './TechnologyIcons';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'


const IMG_URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";


// Project Card
{/*
<a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
</a>
*/}

const ProjectAlbum = ({ projects }) => {

    return projects.length === 0 ?
        <h2 className="text-gray">No Projects</h2>
        :
        <ul role="list" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-gray-100 p-8">
            {
                projects.map((project, ndx) => (
                    <li
                        key={ndx}
                        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col p-8">

                            <i className={`fa-4x ${project.getCardIcon()} text-gray-500`} />

                            <div className="">
                                <h3 className="mt-6 text-gray-900 text-sm font-medium">{project.getTitle()}</h3>
                                <h6 className="text-gray-700 text-xs font-medium">{project.getYear()}</h6>
                                <p className="text-gray-500 text-sm mt-3">{project.getCardDescription()}</p>

                            </div>
                        </div>

                        <div className="mt-3 align-bottom p-4">
                            <div role="list" className="grid grid-cols-5 gap-3">
                                {
                                    project.getTechnologies().sort().map((technology, ndx) => <img key={ndx} className="m-auto" src={`/assets/icons/${technology}.svg`} alt={`${technology}.svg`} height={24} width={24} />)}
                            </div>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                {
                                    project.hasView() &&
                                    <div className="w-0 flex-1 flex">
                                        <a
                                            href={`portfolio/${project.getLinkName()}/view`}
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                        >
                                            <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">View</span>
                                        </a>
                                    </div>
                                }
                                {
                                    project.hasDemo() &&
                                    <div className="-ml-px w-0 flex-1 flex">
                                        <a
                                            href={`portfolio/${project.getLinkName()}/demo`}
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                        >
                                            <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">Demo</span>
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </li>
                ))}
        </ul>

}

export default ProjectAlbum;




