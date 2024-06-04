import { Link } from "react-router-dom";
import { classNames } from "../utils/utils";

export default function Navigation({ pages }) {
  return (
    <nav className="flex m-8" aria-label="Breadcrumb">
      <ol
        role="list"
        className="bg-white rounded-md shadow px-6 flex space-x-4"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              @corbingrbr
              <span className="sr-only">corbingrbr</span>
            </Link>
          </div>
        </li>
        {pages.map((page, ndx) => (
          <li key={ndx} className="flex">
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
              <Link
                to={page.href}
                className={classNames(
                  "ml-4 text-sm font-medium",
                  page.color
                    ? "text-indigo-600 font-bold"
                    : "text-gray-500 hover:text-gray-700"
                )}
                styles={page.color ? { color: page.color } : {}}
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Prepend a home icon onto the crumbs
{
  /*<li className="flex">
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
                    <a href="#" className="ml-4 text-gray-400 hover:text-gray-500">
                        <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                    </a>
                </div>
</li>*/
}
