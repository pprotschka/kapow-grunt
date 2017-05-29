// SassDoc Task - https://github.com/SassDoc/grunt-sassdoc
// ----------------------------------------------------------------------------
module.exports = {
	// Generate documentation for our Sass.
	// -------------------------------------
	options: {
		dest: '<%= siteInfo.docs_path %>/<%= siteInfo.docs_dir_scss %>'
	},
	sass: {
		src: '<%= siteInfo.assets_path %>/<%= siteInfo.scss_dir %>',
	}
};
