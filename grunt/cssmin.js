module.exports = {
  css: {
    options: {
      sourceMap: true
    },
    files: {
      '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/style.css': '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/site.css'
    }
  }
};
