// Responsive Images Task - https://github.com/andismith/grunt-responsive-images
// ----------------------------------------------------------------------------
module.exports = {
  options: {
    // Use Graphics Magick as the engine
    engine: 'gm',
    // Fetch our sizes from the gruntfile
    sizes: '<%= imgSizes %>',
  },
  // Create responsive image sizes for all of our JPG assets
  jpg: {
    options: {
      // We don't want to process every image all the time
      newFilesOnly: true
    },
    files: [ {
      expand: true,
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
      src: [ '**/*.jpg' ],
      custom_dest: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/{%= name %}/'
    } ]
  }
};
