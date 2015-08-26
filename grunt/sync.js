module.exports = {
  fonts_custom: {
    files: [ {
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.fonts_dir %>/',
      src: [ '*', ],
      dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.fonts_dir %>/'
    } ],
  },
  fonts_fontawesome: {
    files: [ {
      cwd: 'bower_components/fontawesome/',
      src: [ '*', ],
      dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.fonts_dir %>/'
    } ],
  },
}
