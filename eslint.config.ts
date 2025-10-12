import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import * as tsEslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [".react-router", "build", "node_modules"],
  },
  {
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  eslintJs.configs.recommended,
  tsEslint.configs.eslintRecommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  eslintPluginPrettierRecommended,
);
