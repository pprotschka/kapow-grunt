// Watch Task - https://github.com/gruntjs/grunt-contrib-watch
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		// Livereload support - requires a browser plugin
		livereload: true,
		spawn: false
	},

	// Process plugin code.
	// -------------------------------------
	code_plugins: {
	  files: [ '<%= wpPlugins %>' ],
	  tasks: [
		'phplint:plugins',
		// 'phpdoc:plugins',
		'notify:code_plugins'
	  ]
	},

	// Process theme code.
	// -------------------------------------
	code_theme: {
	  files: [ '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php' ],
	  tasks: [
		'phplint:theme',
		// 'phpdoc:theme',
		'notify:code_theme'
	  ]
	},

	// Minify JPG & PNG images.
	// -------------------------------------
	images_jpg: {
		files: [ '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/**/*.{jpg,png,gif}' ],
		tasks: [
			'newer:imagemin',
			'notify:images'
		]
	},

	// Minify SVG images.
	// -------------------------------------
	images_svg: {
			files: [ '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/**/*.svg' ],
			tasks: [
					'newer:svgmin',
					'notify:images'
			]
	},

	// Process scripts.
	// -------------------------------------
	scripts: {
		files: [
			'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
			'!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
		],
		tasks: [
			// 'jshint',
			'modernizr',
			'concat',
			'uglify',
			'clean',
			// 'jsdoc',
			'notify:scripts'
		]
	},

	// Process styles.
	// -------------------------------------
	styles: {
		files: [ '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss' ],
		tasks: [
			// 'scsslint',
			'spritesmith',
			'sass',
			'postcss',
			'cssmin',
			'maxfilesize:css',
			'selector4096',
			'copy:main_sourcemap',
			'copy:other_sourcemaps',
			// 'sassdoc',
			'notify:styles'
		]
	}
};
