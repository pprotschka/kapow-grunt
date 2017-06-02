// Clean Task - https://github.com/gruntjs/grunt-contrib-clean
// ----------------------------------------------------------------------------
module.exports = {

	// Remove the temporary JS files created
	// by the grunt-contrib-concat task.
	// -------------------------------------
	clean: {
		src: [
			'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/*.tmp.js',
			'<%= siteInfo.assets_path %>/<%= siteInfo.scss_dir %>/glob/*.scss',
			'<%= siteInfo.assets_path %>/<%= siteInfo.scss_dir %>/<%= siteInfo.scss_base_dir %>/_sprites.scss'
		]
	}
};
