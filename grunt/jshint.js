module.exports = {
  options: {
    jshintrc: 'grunt/config/jshintrc.json',
    reporter: require('jshint-stylish'),
    force: true
  },
  before: {
    options: {
      reporterOutput: '<%= siteInfo.reports_path %>/jshint-before.txt'
    },
    src: [
    '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
    '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
    ]
  },
  after: {
    options: {
      reporterOutput: '<%= siteInfo.reports_path %>/jshint-after.txt'
    },
    src: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/**/*.js']
  }
};
