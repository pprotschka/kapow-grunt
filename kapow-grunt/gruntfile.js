module.exports = function( grunt ) {
	require( 'load-grunt-config' )( grunt, {
		init: true,
		jitGrunt: {
			jitGrunt: true,
			// These static mappings help Grunt play nicely with certain plugins
			staticMappings: {
				sasslint: 'grunt-sass-lint',
				sprite: 'grunt-spritesmith',
				maxfilesize: 'grunt-max-filesize',
			}
		},
		// -----------------------------------------------------------------------------
		// Anything you define within the main 'data' object can be accessed
		// both in the Gruntfile and in the individual task configurations e.g.
		// <%= wpInfo.theme_name %>, <%= siteInfo.assets_path %> etc.
		// -----------------------------------------------------------------------------
		data: {
			// -------------------------------------
			// Project specific settings
			// -------------------------------------
			siteInfo: {
				// The 'fancy' name for your project e.g. 'My First Website'
				fancy_name: 'My Project',
				// Documentation path relative to the project root - NO trailing slash
				docs_path: 'docs',
				// Reports path relative to the project root - NO trailing slash
				reports_path: 'reports',
				// Assets path relative to the project root - NO trailing slash
				assets_path: 'assets',
				// Image assets directory
				img_dir: 'img',
				// Javascript assets directory
				js_dir: 'js',
				// Sass assets directory
				sass_dir: 'sass',
				// CSS assets directory
				css_dir: 'css',
				// Font assets directory
				fonts_dir: 'fonts',
				// Name of your main Sass file and consequent CSS file
				sass_file: 'style'
			},

			// -------------------------------------
			// WordPress specific settings
			// -------------------------------------
			wpInfo: {
				// Path to wp-content relative to the project root
				wp_content: 'build/wp-content',
				// WordPress theme directory name
				theme_name: 'my-project',
				// Theme assets directory
				assets_dir: 'assets',
				// Theme images directory
				img_dir: 'img',
				// Theme Javascript directory
				js_dir: 'js',
				// Theme CSS directory
				css_dir: 'css',
				// Theme fonts directory
				fonts_dir: 'fonts',
			},

			// -------------------------------------
			// Array of paths to WordPress plugin
			// folders/files that require linting
			// -------------------------------------
			wpPlugins: [
				// '<%= wpInfo.wp_content %>/plugins/my-plugin/**/*.php',
			],

			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the HEADER
			// -------------------------------------
			concatHead: [
				'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js',
				'bower_components/picturefill/dist/picturefill.js',
				'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.js'
			],

			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the HEADER for IE
			// -------------------------------------
			concatHeadIE: [
				'bower_components/es5-shim/es5-shim.js',
				'bower_components/html5shiv/dist/html5shiv.js',
				'bower_components/selectivizr/selectivizr.js',
				'bower_components/respondJS/src/respond.js',
				'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header_ie.js'
			],

			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the FOOTER
			// -------------------------------------
			concatFoot: [
				'bower_components/underscore/underscore.js',
				// 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
				// 'bower_components/foundation/js/foundation.js',
				'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/_navigation.js',
				'<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.js'
			],

			// -------------------------------------
			// Array of objects that have Bower `src`
			// and theme `dest` paths to facilitate
			// syncing of files and/or folders.
			//
			// There is no need for `bower_components`
			// in the `src` if you specify `cwd` in
			// the object. This is useful if you wish
			// to define multiple `src` paths.
			//
			// If you need to sync a directory in
			// its entirety, append `/**` to the
			// path to the source directory.
			//
			// Finally, remember the `dest` path is
			// relative to the project root, not the
			// `cwd` if specified.
			// -------------------------------------
			syncAssets: [
				// Example to use a basis for any new Bower folder/file syncing.
				// { cwd: 'bower_components', src: ['path/**'], dest: 'dest/'}
				{
					src: ['<%= siteInfo.assets_path %>/<%= siteInfo.fonts_dir %>/**'],
					dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.fonts_dir %>/'
				}
			]
		}
	} );
	// -----------------------------------------------------------------------------
	// Provides a summary of the time tasks have taken
	// -----------------------------------------------------------------------------
	require( 'time-grunt' )( grunt );

	// -----------------------------------------------------------------------------
	// Silences grunt-newer
	// https://github.com/tschaub/grunt-newer/issues/52#issuecomment-59397284
	// -----------------------------------------------------------------------------
	var origLogHeader = grunt.log.header;
	grunt.log.header = function( msg ) {
		if ( !/newer(-postrun)?:/.test( msg ) ) {
			origLogHeader.apply( this, arguments );
		}
	};
};
