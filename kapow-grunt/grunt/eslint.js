// ESLint Task - https://github.com/sindresorhus/grunt-eslint
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		// Import our ESLint config options.
		configFile: 'grunt/config/eslintrc.json',
		// Output the results to file.
		outputFile: '<%= siteInfo.reports_path %>/eslint.md',
		// Ignore warnings and report only errors.
		quiet: true
	},
	// Lint our Javascript.
	// -------------------------------------
	scripts: {
		src: [
			'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
			'!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/<%= siteInfo.js_lib_dir %>/**/*.js'
		]
	}
};
