// Default Task - The master task used to build/re-build the project
// ----------------------------------------------------------------------------
module.exports = function( grunt ) {
	grunt.registerTask( 'default', [
		// 'sync',
		// "lint",
		"spritesmith",
		"sass",
		"postcss",
		"cssmin",
		"maxfilesize:css",
		"selector4096",
		"copy:main_sourcemap",
		"copy:other_sourcemaps",
		"modernizr",
		"concat",
		"uglify",
		// "svg2png",
		"newer:svgmin",
		"newer:imagemin",
		"clean",
		// "document",
		"notify:build"
	] );
};
