module.exports = {
  options: {
      engine: 'gm',
      sizes: '<%= imgSizes %>',
    },
  all: {
    files: [{
      expand: true,
      src: ['**/*.{jpg,png,gif}'],
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
      custom_dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.img_dir %>/{%= name %}/'
    }]
  },
  newer: {
    options: {
      newFilesOnly: true
    },
    files: [{
      expand: true,
      src: ['**/*.{jpg,png,gif}'],
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
      custom_dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.img_dir %>{%= name %}/'
    }]
  }
};
