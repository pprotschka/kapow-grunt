module.exports = {
  svg: {
    files: [
      {
        cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
        src: ['**/*.svg']
      }
    ]
  }
};
