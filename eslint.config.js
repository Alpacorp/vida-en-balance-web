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
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // TypeScript ya resuelve los módulos y los alias @ui/@content/...;
      // el resolver de eslint-plugin-import no los conoce y daría falsos
      // positivos. Las reglas útiles del plugin sí se mantienen.
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/no-duplicates": "error",

      // El sitio es en español: los textos de accesibilidad deben serlo.
      "jsx-a11y/lang": "error",

      // TEMPORAL — degradado a aviso, no silenciado.
      // Marca los 5 sitios donde se deriva estado de la URL con
      // useState+useEffect (BalancePage, NutritionalPage, ArticlePage,
      // Header, NutritionalHeader). Provoca un render intermedio que muestra
      // el 404 antes de la página real. Se corrige en la fase de refactor de
      // React; subir a "error" en cuanto no queden casos.
      "react-hooks/set-state-in-effect": "warn",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Debe ir al final: desactiva las reglas que chocan con Prettier.
  configPrettier,
);
