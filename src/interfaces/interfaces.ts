/**
 * Every shared type, under one import path.
 *
 * The types themselves live in two modules that have nothing to do with each
 * other: `content.ts` describes the data under `src/content/`, and
 * `componentProps.ts` the props of individual components. They were a single
 * 245-line file, which meant looking up a component's props landed you among
 * the article and product models.
 *
 * This re-export exists so that splitting them did not have to touch the
 * twenty-odd files that import from here. Importing from the specific module
 * says more about what a file depends on, and is preferred in new code.
 */
export type * from "./content";
export type * from "./componentProps";
