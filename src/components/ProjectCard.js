import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <i className={`fa-4x ${project.getCardIcon()} text-gray-500`} />

        <div className="">
          <h3 className="mt-6 text-gray-900 text-sm font-medium">
            {project.getTitle()}
          </h3>
          <h6 className="text-gray-700 text-xs font-medium">
            {project.getYear()}
          </h6>
          <p className="text-gray-500 text-sm mt-3">
            {project.getCardDescription()}
          </p>
        </div>
      </div>

      <div className="mt-3 align-bottom p-4">
        <div role="list" className="grid grid-cols-5 gap-3">
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
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          {project.hasView() && (
            <div className="w-0 flex-1 flex">
              <a
                href={`projects/${project.getLinkName()}/view`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <div>
                  <i className="w-5 h-5 fas fa-info-circle text-gray-400 align-middle" />
                  <span className="ml-3">Info</span>
                </div>
              </a>
            </div>
          )}
          {project.hasDemo() && (
            <div className="-ml-px w-0 flex-1 flex items-center">
              <a
                href={`portfolio/${project.getLinkName()}/demo`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                {/*<PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />*/}
                <div>
                  <i className="w-5 h-5 fas fa-play-circle text-gray-400" />
                  <span className="ml-3">Demo</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
