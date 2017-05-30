// PostCSS Task - https://github.com/nDmitry/grunt-postcss
// ----------------------------------------------------------------------------
module.exports = {
	// Run our CSS through pixrem and
	// autoprefixer.
	// -------------------------------------
	options: {
		map: true,
		processors: [
			require( 'autoprefixer' )( {
				browsers: [ '> 5%', 'last 2 versions' ]
			} ),
			require( 'pixrem' )( {
				atrules: true
			} )
		]
	},
	frontend: {
		src: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/<%= siteInfo.scss_file %>.css',
		dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= siteInfo.scss_file %>.css'
	},
	backend: {
		files: [ {
			expand: true,
			cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>',
			src: [
				'*.css',
				'!<%= siteInfo.scss_file %>.css'
			],
			dest: '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.css_dir %>',
			ext: '.min.css'
		} ]
	}
}
