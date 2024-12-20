import { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {headerLogo} from "@assets/images/components";


const navigation = [
  { name: "Nuestros Productos", href: "#" },
  { name: "Tips Balance", href: "#" },
  { name: "Mente en Balance", href: "#" },
  { name: "Cuerpo en Balance", href: "/cuerpo-balance" },
  { name: "Recetas", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <div className="bg-white">
        <header className="relative bg-white inset-x-0 top-0 z-50">
          <div className="absolute flex lg:flex-1 mt-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">San Rafael Balance</span>
              <img
                  alt="San Rafael Balance Logo"
                  title="San Rafael Balance"
                  src={headerLogo}
                  className="h-24 w-auto"
              />
            </a>
          </div>
          <nav
              aria-label="Global"
              className="flex items-end justify-end p-6 lg:px-8 md:items-center md:justify-center"
          >
            <div className="flex lg:hidden">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6"/>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="text-sm tracking-wide px-3 mx-3 font-montserrat-bold text-[#4C50A2] uppercase hover:underline hover:underline-offset-4 transition-transform duration-100"
                  >
                    {item.name}
                  </a>
              ))}
            </div>
          </nav>
          <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
          >
            <div className="fixed inset-0 z-50"/>
            <DialogPanel
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">San Rafael Balance</span>
                  <img
                      alt=""
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                  />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6"/>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
  );
};
