module.exports = {
  options: {
    destination: '<%= siteInfo.docs_path %>/js'
  },
  src: [
    '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/*.js'
  ]
};
