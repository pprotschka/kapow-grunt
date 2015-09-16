// Sync Task - https://github.com/tomusdrw/grunt-sync
// ----------------------------------------------------------------------------
module.exports = {
  // Copy custom fonts into the theme
  fonts_custom: {
    files: [ {
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.fonts_dir %>/',
      src: [ '*', ],
      dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.fonts_dir %>/'
    } ],
  },
  // Copy Font Awesome fonts into the theme
  fonts_fontawesome: {
    files: [ {
      cwd: 'bower_components/fontawesome/fonts',
      src: [ '*', ],
      dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.fonts_dir %>/'
    } ],
  },
}
