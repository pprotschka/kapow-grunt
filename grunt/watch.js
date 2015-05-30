module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  code: {
    files: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.wp_theme_name %>/**/*.php'],
    tasks: ['newer:phplint', 'notify:code']
  },
  scripts: {
    files: ['assets/js/**/*.js', '!js/modernizr-custom.js'],
    tasks: ['newer:jshint:before', 'newer:modernizr', 'newer:concat', 'newer:uglify', 'newer:jshint:after', 'clean', 'notify:scripts']
  },
  styles: {
    files: ['assets/scss/**/*.scss'],
    tasks: ['scsslint', 'sass', 'postcss', 'cssmin', 'spriteGenerator', 'notify:styles']
  },
  images: {
    files: ['assets/img/**/*.{png,jpg,svg,gif}'],
    tasks: ['newer:imagemin', 'notify:images']
  }
};
