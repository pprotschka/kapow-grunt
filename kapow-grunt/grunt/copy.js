// Copy Task - https://github.com/gruntjs/grunt-contrib-copy
// ----------------------------------------------------------------------------
module.exports = {
	main_sourcemap: {
		expand: true,
		cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/',
		src: [ '<%= siteInfo.scss_file %>.css.map' ],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/'
	},
	other_sourcemaps: {
		expand: true,
		cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/',
		src: [ '*.map', '!<%= siteInfo.scss_file %>.css.map' ],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.css_dir %>'
	},
	unminified_css: {
		expand: true,
		cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/',
		src: [ '*.css', '!*.min.css', '!*.css.map' ],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.css_dir %>'
	},
	unminified_js: {
		expand: true,
		cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/',
		src: [ '*.js', '!*.tmp.js', '!footer.js', '!header.js', '!header_ie.js' ],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>'
	},
	grunticon: {
		files: [
			{
				src: ['<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.icons_dir %>/grunticon-loader.js'],
				dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/<%= siteInfo.js_lib_dir %>/_grunticon-loader.js'
			}
		]
	}
};
