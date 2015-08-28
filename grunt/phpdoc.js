// PHPdoc Task - https://github.com/chrisklaussner/grunt-phpdoc
// ----------------------------------------------------------------------------
module.exports = {
  // Generate theme and plugin documentation
  all: {
    src: [
      '<%= wpPlugins %>',
      '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>'
    ],
    dest: '<%= siteInfo.docs_path %>/php'
  },
  // Generate theme documentation
  theme: {
    src: [ '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>' ],
    dest: '<%= siteInfo.docs_path %>/php'
  },
  // Generate plugin documentation
  plugins: {
    src: [ '<%= wpPlugins %>' ],
    dest: '<%= siteInfo.docs_path %>/php'
  }
}
