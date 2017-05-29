// Sass Task - https://github.com/sindresorhus/grunt-sass
// ----------------------------------------------------------------------------
module.exports = {
	// Generate CSS from our Sass files.
	// -------------------------------------
	sass: {
		options: {
			sourceMap: true,
			sourceMapContents: true,
			sourceMapRoot: 'assets/css',
			style: 'compressed',
			includePaths: [
				'../../bower_components/',
				'../../../../bower_components/',
			]
		},
		files: [ {
			expand: true,
			cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.scss_dir %>',
			src: [ '*.scss' ],
			dest: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>',
			ext: '.css'
		} ]
	}
};
