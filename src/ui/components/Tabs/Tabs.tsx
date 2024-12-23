import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import tabs from "./data.json";
import { Content } from "../Content/Content.tsx";

export const Tabs = () => {
  const [value, setValue] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const { id, name, description, image, types } = tabs[value];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTabName = event.target.value;
    const selectedTabIndex = tabs.findIndex(
      (tab) => tab.name === selectedTabName
    );
    setValue(selectedTabIndex);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section className="bg-gray-100" id="productos">
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs[value]?.name}
          aria-label="Select a tab"
          className={`col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 ${
            tabs.find((tab) => tab.id)?.id && "focus:outline-[#4C50A2]"
          }`}
          onChange={handleSelectChange}
        >
          {tabs.map((tab, idx) => (
            <option key={tab.id + idx} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow-sm"
        >
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.id}
              onClick={() => {
                setValue(tabIdx);
                setAnimationKey(prev => prev + 1);
              }}
              aria-current={tab.id === id ? "page" : undefined}
              className={`${
                tab.id === id
                  ? "text-[#4C50A2] bg-gray-100"
                  : "text-gray-500 bg-gray-50 hover:text-gray-700"
              } ${tabIdx === 0 ? "rounded-l-lg" : ""} ${
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : ""
              } group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium focus:z-10`}
            >
              <span className="text-lg font-montserrat-medium">{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <Content
        key={animationKey}
        title={name}
        description={description}
        types={types}
        image={image}
      />
    </section>
  );
};
