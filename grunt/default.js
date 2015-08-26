module.exports = function( grunt ) {
  grunt.registerTask( 'default', [
    'sync',
    // "lint",
    "sass",
    "postcss",
    "spritesmith",
    "cssmin",
    "modernizr",
    "concat",
    "uglify",
    // "svg2png",
    // "respimages",
    "newer:imagemin",
    "clean",
    // "docs",
    "notify:build"
  ] );
};
