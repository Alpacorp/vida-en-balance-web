import { useState } from "react";

import { ContentTab } from "@ui/sections/Home/ContentTab/ContentTab";

import { tabsContent } from "@content/home/tabs/tabs";

export const Tabs = () => {
  const [value, setValue] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const { id, name, description, image, types, nutritional_link, recipes_link } =
    tabsContent[value];

  const handleTabChange = (idx: number) => {
    setValue(idx);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="bg-gray-100" id="productos">
      {/* Mobile: horizontal scrollable tabs */}
      <div className="sm:hidden">
        <div className="overflow-x-auto">
          <div className="flex gap-2 px-4 py-3 border-b border-gray-200">
            {tabsContent.map((tab, tabIdx) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tabIdx)}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-montserrat-medium transition-colors duration-200 ${
                  tab.id === id
                    ? "bg-secondary text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <img
                  src={tab.types[0].url}
                  alt={tab.name}
                  className="w-6 h-8 object-contain"
                  width="24"
                  height="32"
                />
                <span className="whitespace-nowrap">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
        <ContentTab
          key={animationKey}
          title={name}
          description={description}
          types={types}
          image={image}
          nutritional_link={nutritional_link}
          recipes_link={recipes_link}
        />
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:flex mx-auto">
        {/* Vertical tabs navigation */}
        <nav
          aria-label="Tabs"
          className="isolate flex flex-col min-w-62.5 divide-y divide-gray-200 rounded-lg shadow-sm border bg-white"
        >
          {tabsContent.map((tab, tabIdx) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tabIdx)}
              aria-current={tab.id === id ? "page" : undefined}
              className={`${
                tab.id === id
                  ? "text-secondary bg-cyan-50 border-r-[5px] border-r-secondary"
                  : "text-gray-500 bg-white border-r-[5px] border-r-transparent hover:bg-gray-50 hover:text-gray-700"
              } ${tabIdx === 0 ? "rounded-tl-lg rounded-tr-lg" : ""} ${
                tabIdx === tabsContent.length - 1
                  ? "rounded-bl-lg rounded-br-lg"
                  : ""
              } relative overflow-hidden px-4 py-4 text-sm font-montserrat-medium focus:z-10 transition-colors duration-200`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={tab.types[0].url}
                  alt={`Empaque de ${tab.name}`}
                  className="w-14 h-20 object-contain filter drop-shadow-md shrink-0"
                  height="80"
                  width="56"
                />
                <span className="text-sm font-montserrat-medium text-left leading-snug">
                  {tab.name}
                </span>
              </div>
            </button>
          ))}
        </nav>

        {/* Content area desktop */}
        <div className="flex items-center flex-1">
          <ContentTab
            key={animationKey}
            title={name}
            description={description}
            types={types}
            image={image}
            nutritional_link={nutritional_link}
            recipes_link={recipes_link}
          />
        </div>
      </div>
    </section>
  );
};
