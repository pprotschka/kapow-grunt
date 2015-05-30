module.exports = {
  options: {
    globals: {
      jQuery: true,
      console: true,
      module: true,
      window: true
    },
    reporter: require('jshint-stylish'),
    force: true,
  },
  before: {
    options: {
      reporterOutput: 'reports/jshint-before.txt'
    },
    src: [
    'assets/js/**/*.js',
    '!js/modernizr-custom.js'
    ]
  },
  after: {
    options: {
      reporterOutput: 'reports/jshint-after.txt'
    },
    src: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.wp_theme_name %>/js/**/*.js']
  }
};
