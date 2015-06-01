module.exports = {
  dist: {
    src: [
      '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/*.js'
    ],
    options: {
        destination: 'doc'
    }
  }
};
