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
		nonull: true
	},
	header_min: {
		src: ['<%= concatHead %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.tmp.js',
		nonull: true
	},
	// Header JS for IE.
	// -------------------------------------
	header_ie: {
		src: ['<%= concatHeadIE %>'],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>/header_ie.js',
		nonull: true
	},
	header_ie_min: {
		src: ['<%= concatHeadIE %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header_ie.tmp.js',
		nonull: true
	},
	// Footer JS.
	// -------------------------------------
	footer: {
		src: ['<%= concatFoot %>'],
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.js_dir %>/footer.js',
		nonull: true
	},
	footer_min: {
		src: ['<%= concatFoot %>'],
		dest: '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.tmp.js',
		nonull: true
	}
};
