/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
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
	bracketSameLine: false,
	quoteProps: "consistent",
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
	plugins: ["@ianvs/prettier-plugin-sort-imports"],
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
