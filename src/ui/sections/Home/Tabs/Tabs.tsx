import { ChangeEvent, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import { ContentTab } from "@ui/sections/Home/ContentTab/ContentTab";

import { tabsContent } from "@content/home/tabs/tabs";

export const Tabs = () => {
  const [value, setValue] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const {
    id,
    name,
    description,
    image,
    types,
    nutritional_link,
    recipes_link,
  } = tabsContent[value];

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTabName = event.target.value;
    const selectedTabIndex = tabsContent.findIndex(
      (tab) => tab.name === selectedTabName,
    );
    setValue(selectedTabIndex);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="bg-gray-100" id="productos">
      <div className="grid grid-cols-1 sm:hidden">
        <select
          value={tabsContent[value]?.name}
          aria-label="Select a tab"
          className={`col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 ${
            tabsContent.find((tab) => tab.id)?.id && "focus:outline-[#4C50A2]"
          }`}
          onChange={handleSelectChange}
        >
          {tabsContent.map((tab, idx) => (
            <option key={tab.id + idx} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
        {/* Content area mobile */}
        <div className="flex-1 md:hidden">
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
      {/* Desktop layout */}
      <div className="hidden sm:flex mx-auto">
        {/* Vertical tabs navigation */}
        <nav
          aria-label="Tabs"
          className="isolate flex flex-col min-w-[250px] divide-y divide-gray-200 rounded-lg shadow-sm border"
        >
          {tabsContent.map((tab, tabIdx) => (
            <button
              key={tab.id}
              onClick={() => {
                setValue(tabIdx);
                setAnimationKey((prev: number) => prev + 1);
              }}
              aria-current={tab.id === id ? "page" : undefined}
              className={`${
                tab.id === id
                  ? "text-[#4C50A2] bg-gray-100 !border-r-4 !border-[#4C50A2] !border-t-0"
                  : "text-gray-500 bg-gray-50 hover:text-gray-700"
              } ${tabIdx === 0 ? "rounded-t-lg" : ""} ${
                tabIdx === tabsContent.length - 1 ? "rounded-b-lg" : ""
              } relative overflow-hidden px-6 py-4 text-center text-sm font-montserrat-medium focus:z-10`}
            >
              <div className="h-auto w-auto aspect-auto bg-white/10 p-1 flex items-center justify-between gap-2">
                <img
                  src={tab.types[tab.types.length - 1].url}
                  alt={tab.name}
                  className="w-18 h-24 object-contain filter drop-shadow-md"
                />
                <span className="text-lg font-montserrat-medium">
                  {tab.name}
                </span>
              </div>
            </button>
          ))}
        </nav>

        {/* Content area desktop */}
        <div className="flex items-center">
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
