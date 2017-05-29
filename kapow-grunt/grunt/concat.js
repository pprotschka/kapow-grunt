// Concat Task - https://github.com/gruntjs/grunt-contrib-concat
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		separator: '\r\n\r\n',
	},
	// Header JS.
	// -------------------------------------
	header: {
		src: ['<%= concatHead %>'],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>/header.js',
		nonull: false
	},
	header_min: {
		src: ['<%= concatHead %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.tmp.js',
		nonull: false
	},
	// Header JS for IE.
	// -------------------------------------
	header_ie: {
		src: [
			'<%= concatHeadIE %>',
			'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header_ie.js'
		],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>/header_ie.js',
		nonull: false
	},
	header_ie_min: {
		src: ['<%= concatHeadIE %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header_ie.tmp.js',
		nonull: false
	},
	// Footer JS.
	// -------------------------------------
	footer: {
		src: ['<%= concatFoot %>'],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>/footer.js',
		nonull: false
	},
	footer_min: {
		src: ['<%= concatFoot %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.tmp.js',
		nonull: false
	}
};
