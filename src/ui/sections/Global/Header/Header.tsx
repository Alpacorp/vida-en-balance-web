import { useState, useEffect, FC } from "react";
import { Link, useLocation } from "react-router-dom";

import headerLogo from "@assets/images/san-rafael-balance-logo.webp";

import { mainMenuLinks } from "@content/navigation/mainMenuLinks";

import { homePageLoader, routesLoaders } from "@utils/loaders";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only write when the boolean actually flips: setting it on every scroll
      // event re-rendered the whole header continuously while scrolling.
      setIsScrolled((wasScrolled) => {
        const next = window.scrollY > 0;
        return next === wasScrolled ? wasScrolled : next;
      });
    };

    // Passive: this handler never calls preventDefault, and saying so lets the
    // browser scroll without waiting on it.
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closing the menu on navigation is a state reset, not derived state. Doing
  // it during render — instead of in an effect — closes the menu in the same
  // pass as the new route, with no intermediate frame showing it still open.
  const [pathOnRender, setPathOnRender] = useState(location.pathname);
  if (pathOnRender !== location.pathname) {
    setPathOnRender(location.pathname);
    setIsMobileMenuOpen(false);
  }

  const isActive = (path: string) => location.pathname.startsWith(path);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}>
          <Link
            to="/"
            className={`shrink-0 transition-all duration-300 ${isScrolled ? "mt-0" : "mt-6"}`}
            onMouseEnter={() => homePageLoader()}
            onFocus={() => homePageLoader()}
          >
            <img
              src={headerLogo}
              title="San Rafael Balance®"
              alt="San Rafael Balance®"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-12" : "h-24"}`}
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
                    ? "text-main border-b-2 border-main"
                    : "text-gray-700 hover:text-main"
                }`}
                onMouseEnter={() => routesLoaders[item.path]?.()}
                onFocus={() => routesLoaders[item.path]?.()}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-main hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main"
            aria-expanded={isMobileMenuOpen}
            // aria-expanded alone says something is open without saying what.
            // aria-controls ties the button to the panel it toggles.
            aria-controls="mobile-menu"
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
        id="mobile-menu"
        /*
          Closed, this panel is only clipped: max-height and opacity hide it
          from sight while its links keep their place in the tab order, so on a
          phone-sized viewport tabbing through the header walked into a menu
          nobody could see. inert closes it for the keyboard and for assistive
          tech the same way the styles close it visually.
        */
        inert={!isMobileMenuOpen}
        className={`md:hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
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
                  ? "text-main bg-cyan-50 border-l-4 border-main"
                  : "text-gray-700 hover:bg-gray-50 hover:text-main"
              }`}
              onMouseEnter={() => routesLoaders[item.path]?.()}
              onFocus={() => routesLoaders[item.path]?.()}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
