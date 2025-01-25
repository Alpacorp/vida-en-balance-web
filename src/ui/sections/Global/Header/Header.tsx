import { useState, useEffect, FC } from "react";
import { Link, useLocation } from "react-router-dom";

import headerLogo from "@assets/images/san-rafael-balance-logo.webp";

import { mainMenuLinks } from "@content/navigation/mainMenuLinks";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname.startsWith(path);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 mt-6">
            <img
              src={headerLogo}
              title="San Rafael Balance"
              alt="San Rafael Balance"
              className="h-24 w-auto"
              height="96"
              width="96"
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {mainMenuLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center uppercase px-1 pt-1 text-sm font-montserrat-bold transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            {/* Menu icon */}
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="pt-2 pb-3 space-y-1">
          {mainMenuLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block pl-3 pr-4 py-2 text-base font-montserrat-bold ${
                isActive(item.path)
                  ? "text-blue-900 bg-blue-50 border-l-4 border-blue-900"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
