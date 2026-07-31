import { ReactNode, useRef, useState } from "react";

import { ContentTab } from "@ui/sections/Home/ContentTab/ContentTab";

import { tabsContent } from "@content/home/tabs/tabs";

/**
 * The same tab list is rendered twice — a horizontal strip for phones and a
 * vertical column for wider screens — and CSS hides whichever does not apply.
 * Both copies live in the document at once, so every id has to say which copy
 * it belongs to; duplicated ids would break the tab/panel pairing and are a
 * violation in their own right.
 */
const tabId = (variant: string, id: string | number) => `tab-${variant}-${id}`;
const panelId = (variant: string, id: string | number) =>
  `panel-${variant}-${id}`;

interface TabListProps {
  variant: string;
  orientation: "horizontal" | "vertical";
  value: number;
  onChange: (index: number) => void;
  className: string;
  tabClassName: (isSelected: boolean, index: number) => string;
  renderTab: (
    tab: (typeof tabsContent)[number],
    isSelected: boolean,
  ) => ReactNode;
}

/**
 * The tab list, with the keyboard behaviour the ARIA tabs pattern expects.
 *
 * Previously these were plain buttons in a <nav>, which is a fair pattern but
 * not this one: every button sat in the tab order, so reaching the content
 * behind them meant tabbing past all five, and nothing tied a button to the
 * panel it controlled — activating one swapped the content with no way for
 * assistive tech to know that had happened.
 *
 * Now the whole list is a single tab stop: only the selected tab is reachable
 * with Tab, the arrow keys move between products, and Tab again steps into the
 * panel. Selection follows focus, so arrowing through the list shows each
 * product as it goes.
 */
function TabList({
  variant,
  orientation,
  value,
  onChange,
  className,
  tabClassName,
  renderTab,
}: TabListProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    const last = tabsContent.length - 1;

    let target: number | null = null;
    if (event.key === forward) target = value === last ? 0 : value + 1;
    else if (event.key === backward) target = value === 0 ? last : value - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = last;
    if (target === null) return;

    // Otherwise the arrow keys scroll the page out from under the tabs.
    event.preventDefault();
    onChange(target);
    tabRefs.current[target]?.focus();
  };

  return (
    /*
      The handler sits on each tab rather than on the list. In this pattern the
      list itself is never focusable — the roving tabindex keeps focus on a tab
      — so a key event only ever originates on a tab anyway.
    */
    <div
      role="tablist"
      aria-label="Productos"
      aria-orientation={orientation}
      className={className}
    >
      {tabsContent.map((tab, index) => {
        const isSelected = index === value;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={tabId(variant, tab.id)}
            aria-selected={isSelected}
            aria-controls={panelId(variant, tab.id)}
            // Roving tabindex: the list is one stop, not five.
            tabIndex={isSelected ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => onChange(index)}
            onKeyDown={handleKeyDown}
            className={tabClassName(isSelected, index)}
          >
            {renderTab(tab, isSelected)}
          </button>
        );
      })}
    </div>
  );
}

export const Tabs = () => {
  const [value, setValue] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const activeTab = tabsContent[value];
  if (!activeTab) return null;

  const { id, name, description, image, types, nutritional_link, recipes_link } =
    activeTab;

  const handleTabChange = (idx: number) => {
    setValue(idx);
    setAnimationKey((prev) => prev + 1);
  };

  /*
    No tabIndex on the panel: it holds links, and the ARIA pattern only asks
    for a focusable panel when there is nothing focusable inside it. The panel
    follows its tab list in the DOM, so Tab off the selected tab lands on the
    first link within.
  */
  const panel = (variant: string) => (
    <div
      role="tabpanel"
      id={panelId(variant, id)}
      aria-labelledby={tabId(variant, id)}
    >
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
  );

  return (
    <section className="bg-gray-100" id="productos">
      {/* Mobile: horizontal scrollable tabs */}
      <div className="sm:hidden">
        <div className="overflow-x-auto">
          <TabList
            variant="movil"
            orientation="horizontal"
            value={value}
            onChange={handleTabChange}
            className="flex gap-2 px-4 py-3 border-b border-gray-200"
            tabClassName={(isSelected) =>
              `shrink-0 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-montserrat-medium transition-colors duration-200 ${
                isSelected
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`
            }
            renderTab={(tab) => (
              <>
                {/*
                  Decorative: the product name sits in the span right beside it,
                  so describing the image repeats what the button already says
                  and a screen reader announces the name twice.
                */}
                <img
                  src={tab.tabIcon}
                  alt=""
                  className="w-6 h-8 object-contain"
                  width="24"
                  height="32"
                />
                <span className="whitespace-nowrap">{tab.name}</span>
              </>
            )}
          />
        </div>
        {panel("movil")}
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:flex mx-auto">
        <TabList
          variant="escritorio"
          orientation="vertical"
          value={value}
          onChange={handleTabChange}
          className="isolate flex flex-col min-w-62.5 divide-y divide-gray-200 rounded-lg shadow-sm border bg-white"
          tabClassName={(isSelected, index) =>
            `${
              isSelected
                ? "text-secondary bg-cyan-50 border-r-[5px] border-r-secondary"
                : "text-gray-500 bg-white border-r-[5px] border-r-transparent hover:bg-gray-50 hover:text-gray-700"
            } ${index === 0 ? "rounded-tl-lg rounded-tr-lg" : ""} ${
              index === tabsContent.length - 1
                ? "rounded-bl-lg rounded-br-lg"
                : ""
            } relative overflow-hidden px-4 py-4 text-sm font-montserrat-medium focus:z-10 transition-colors duration-200`
          }
          renderTab={(tab) => (
            <div className="flex items-center gap-3">
              {/* Decorative here too: the name follows in the span. */}
              <img
                src={tab.tabIcon}
                alt=""
                className="w-14 h-20 object-contain filter drop-shadow-md shrink-0"
                height="80"
                width="56"
              />
              <span className="text-sm font-montserrat-medium text-left leading-snug">
                {tab.name}
              </span>
            </div>
          )}
        />

        {/* Content area desktop */}
        <div className="flex items-center flex-1">{panel("escritorio")}</div>
      </div>
    </section>
  );
};
