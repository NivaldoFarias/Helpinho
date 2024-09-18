import eslint from "@eslint/js";
import angular from "angular-eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ files: ["*.cjs"], languageOptions: { globals: globals.commonjs } },
	{
		files: ["**/*.ts"],
		languageOptions: {
			globals: globals.browser,
			parserOptions: { project: true },
		},
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylisticTypeChecked,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			"@angular-eslint/directive-selector": [
				"error",
				{
					type: "attribute",
					prefix: "app",
					style: "camelCase",
				},
			],
			"@angular-eslint/component-selector": [
				"error",
				{
					type: "element",
					prefix: ["app", "ui"],
					style: "kebab-case",
				},
			],
		},
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.html"],
		languageOptions: {
			parser: angular.templateParser,
		},
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
	},
);
