import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import configPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist/**", "node_modules/**", "*.config.js"] },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs.flat["recommended-latest"],
  pluginJsxA11y.flatConfigs.recommended,
  pluginImport.flatConfigs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        // Both projects are listed explicitly: tsconfig.json excludes the test
        // files, so projectService alone would fail to resolve them.
        project: ["./tsconfig.json", "./tsconfig.test.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // TypeScript already resolves modules and the @ui/@content aliases; the
      // eslint-plugin-import resolver does not know them and would report false
      // positives. The plugin's useful rules are kept.
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/no-duplicates": "error",

      // The site is in Spanish, so accessibility text must be too.
      "jsx-a11y/lang": "error",

      // All five cases that derived state from the URL are gone, so this is
      // back to an error and the pattern cannot return unnoticed.
      "react-hooks/set-state-in-effect": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Must come last: turns off the rules that conflict with Prettier.
  configPrettier,
);
