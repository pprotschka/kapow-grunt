module.exports = function(grunt) {
    grunt.registerTask('default', [
      "scsslint",
      "sass",
      "postcss",
      "cssmin",
      "jshint:before",
      "modernizr",
      "concat",
      "uglify",
      "jshint:after",
      "svg2png",
      "respimages",
      "imagemin",
      "phplint",
      "clean",
      "notify:build"
    ]);
};
