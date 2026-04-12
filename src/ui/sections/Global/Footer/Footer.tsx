import { FC } from "react";
import { Link } from "react-router-dom";

import { mainMenuLinks } from "@content/navigation/mainMenuLinks";
import { footerMenuLinks } from "@content/navigation/footerMenuLinks";
import { socialMenuLinks } from "@content/navigation/socialMenuLinks";

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@assets/icons";

import { routesLoaders } from "@utils/loaders";

const iconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
};

const footerMenu = mainMenuLinks.concat(footerMenuLinks);

export const Footer: FC = () => {
  return (
    <footer className="bg-linear-to-b from-main to-tertiary font-montserrat-medium">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8">
        {/* Nav links */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm/6"
        >
          {footerMenu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              target={item.name === "Aviso de privacidad" ? "_blank" : "_self"}
              className="text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-150"
              onMouseEnter={() => routesLoaders[item.path]?.()}
              onFocus={() => routesLoaders[item.path]?.()}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Bottom row: copyright + social */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            {new Date().getFullYear()} San Rafael Balance® | Vida en Balance Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {socialMenuLinks.map((item) => {
              const IconComponent =
                iconComponents[item.icon as keyof typeof iconComponents];
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  target="_blank"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-transform duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <img
                    src={IconComponent}
                    alt={`Logo de ${item.name}`}
                    title={item.name}
                    className="w-5 h-5"
                    height="20"
                    width="20"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
