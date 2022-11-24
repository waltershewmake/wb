module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `@wb/eslint-config-custom`
	extends: ["custom"],
	settings: {
		next: {
			rootDir: ["apps/*/"],
		},
	},
};
