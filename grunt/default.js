module.exports = function(grunt) {
    grunt.registerTask('default', [
      "scsslint",
      "sass",
      "postcss",
      "spritesmith",
      "cssmin",
      "jshint:before",
      "modernizr",
      "concat",
      "uglify",
      "jshint:after",
      "svg2png",
      "respimages",
      "newer:imagemin",
      "phplint:all",
      "clean",
      "docs",
      "notify:build"
    ]);
};
