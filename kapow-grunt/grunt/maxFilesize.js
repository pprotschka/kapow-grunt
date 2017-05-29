// Max Filesize Task - https://github.com/alexcorre/grunt-max-filesize
// ----------------------------------------------------------------------------
module.exports = {
	css: {
		options: {
			// Anything over this figure will cause
			// issues in legacy (< 9) IE.
			//  -------------------------------------
			maxBytes: 288000
		},
		src: [ '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= siteInfo.scss_file %>.css' ]
	}
}
