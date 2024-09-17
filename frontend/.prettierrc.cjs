/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig & import("prettier-plugin-tailwindcss").PluginOptions} */
module.exports = {
	semi: true,
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	endOfLine: "lf",
	singleQuote: false,
	proseWrap: "always",
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "always",
	jsxSingleQuote: false,
	bracketSameLine: false,
	quoteProps: "consistent",
	singleAttributePerLine: true,
	htmlWhitespaceSensitivity: "ignore",
	importOrderParserPlugins: ["typescript", "decorators"],
	overrides: [
		{
			files: ["*.d.ts", "*.json"],
			excludeFiles: ["package.json"],
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
	],
	plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],

	// @ianvs/prettier-plugin-sort-imports
	importOrder: [
		"<BUILTIN_MODULES>",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[.][.]/",
		"",
		"^[.]/",
		"",
		"<TYPES>",
		"",
		"<TYPES>^[./]",
	],
};
