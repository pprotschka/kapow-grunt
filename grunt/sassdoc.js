module.exports = {
  options: {
    dest: '<%= siteInfo.docs_path %>/sass'
  },
  sass: {
    src: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>',
  }
};
