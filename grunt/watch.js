module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  code: {
    files: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php'],
    tasks: ['newer:phplint', 'notify:code']
  },
  scripts: {
    files: [
      '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
      '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
    ],
    tasks: ['newer:jshint:before', 'newer:modernizr', 'newer:concat', 'newer:uglify', 'newer:jshint:after', 'clean', 'notify:scripts']
  },
  styles: {
    files: ['<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss'],
    tasks: ['scsslint', 'sass', 'postcss', 'cssmin', 'spriteGenerator', 'notify:styles']
  },
  images: {
    files: ['<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/**/*.{png,jpg,svg,gif}'],
    tasks: ['respimages', 'newer:imagemin', 'notify:images']
  }
};
