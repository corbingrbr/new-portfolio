import { classNames } from "../utils/utils";
import * as P from "../utils/ProjectUtils";

const ProjectListItem = ({
  project,
  isSelected,
  isFeatured,
  setSelectedProject,
  setFeaturedProject,
}) => {
  return (
    <li
      onMouseEnter={() => setFeaturedProject(P.getName(project))}
      onMouseLeave={() => setFeaturedProject(undefined)}
      onClick={() => setSelectedProject(P.getName(project))}
      className={classNames(
        "flex justify-between gap-x-6 py-5 px-5",
        isSelected ? "bg-gray-100" : isFeatured ? "bg-gray-50" : "bg-white"
      )}
    >
      <div className="flex min-w-0 gap-x-4">
        <span className="h-12 w-12 flex-none rounded-full bg-gray-200">
          <i
            className={`self-center fa-2x ${P.getIcon(
              project
            )} text-gray-400 mt-2`}
          />
        </span>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900 justify-self-start text-left">
            {P.getName(project)}
          </p>
          <p
            className="mt-1 truncate text-xs leading-5 text-gray-500 justify-self-start text-left"
            dangerouslySetInnerHTML={{ __html: P.getShortDescription(project) }}
          ></p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{P.getYear(project)}</p>

        {/*<div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
</div>*/}

        <dl className="mt-1 flex w-full flex-none justify-between gap-x-8 sm:w-auto">
          <div className="flex -space-x-0.5">
            <dt className="sr-only">Technologies</dt>
            {P.getTechnologies(project).map((technology, ndx) => (
              <dd key={ndx}>
                <img
                  key={ndx}
                  className="h-6 w-6 rounded-lg bg-gray-50 ring-2 ring-white"
                  src={`/assets/icons/${technology}.svg`}
                  alt={`${technology}.svg`}
                />
              </dd>
            ))}
          </div>
        </dl>
      </div>
    </li>
  );
};

export default ProjectListItem;
