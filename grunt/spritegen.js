module.exports = {
  spriteGenerator: {
    sprite: {
      files: {
        '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/sprite.png': ['<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/site.css']
      }
    }
  }
};
