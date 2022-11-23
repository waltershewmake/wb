module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `@nftag/eslint-config-custom`
	extends: ["custom"],
	settings: {
		next: {
			rootDir: ["apps/*/"],
		},
	},
};
