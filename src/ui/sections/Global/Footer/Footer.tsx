import { FC } from "react";
import { Link } from "react-router-dom";

import { mainMenuLinks } from "@content/navigation/mainMenuLinks";
import { footerMenuLinks } from "@content/navigation/footerMenuLinks";
import { socialMenuLinks } from "@content/navigation/socialMenuLinks";

import footerLogo from "@assets/images/san-rafael-balance-logo.webp";

import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "../../../../assets/icons";

const iconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
}

const footerMenu = mainMenuLinks.concat(footerMenuLinks);

export const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#293078] to-[#494986] font-montserrat-medium">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-3 sm:py-10 lg:px-8">
        <img src={footerLogo} alt="San Rafael Balance" title="San Rafael Balance"
             className="w-40 text-center mx-auto my-5"/>
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {footerMenu.map((item) => (
            <Link key={item.name} to={item.path} className="text-gray-200 hover:text-white hover:underline hover:underline-offset-4 transition-transform duration-100">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {socialMenuLinks.map((item) => {
            const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];
            return (
              <Link key={item.name} to={item.path} target="_blank" className="text-gray-200 hover:text-white hover:transform hover:scale-110 transition-transform duration-200">
                <span className="sr-only">{item.name}</span>
                <img src={IconComponent} alt={item.name} title={item.name} className="w-6 h-6"/>
              </Link>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-200">{new Date().getFullYear()} San Rafael&copy; | Vida en Balance&copy; Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
