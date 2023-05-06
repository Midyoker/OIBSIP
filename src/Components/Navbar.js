import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </a>
              <a
                href="#"
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </nav>
  );
};
export default Navbar;

