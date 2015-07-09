module.exports = {
  all: {
    src: [
      '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/*.png',
      '!<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/sprite.png'
    ],
    dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.img_dir %>/sprite.png',
    destCss: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/base/_sprites.scss',
    imgPath: '<%= wpInfo.img_dir %>/sprite.png'
  }
};
