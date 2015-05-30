module.exports = {
  css: {
    options: {
      sourceMap: true
    },
    files: {
      '<%= wpInfo.wp_content %>/themes/<%= wpInfo.wp_theme_name %>/style.css': 'assets/css/site.css'
    }
  }
};
