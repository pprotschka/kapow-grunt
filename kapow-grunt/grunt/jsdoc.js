// JSDoc Task - https://github.com/krampstudio/grunt-jsdoc
// ----------------------------------------------------------------------------
module.exports = {

	// Generate documentation for our JS.
	// -------------------------------------
	jsdoc: {
		src: [ '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js' ],
		dest: '<%= siteInfo.docs_path %>/<%= siteInfo.docs_dir_js %>'
	}
};
