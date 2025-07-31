import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(["dist", "build", "node_modules"]),
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			react: reactPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		extends: [js.configs.recommended, reactPlugin.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
		rules: {
			"no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "^(motion|Tilt|React)$",
					argsIgnorePattern: "^_",
				},
			],
			"react-refresh/only-export-components": "warn",
		},
	},
]);
