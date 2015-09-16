// Sass Task - https://github.com/sindresorhus/grunt-sass
// ----------------------------------------------------------------------------
module.exports = {
  // Generate CSS from our Sass files
  sass: {
    options: {
      // sourcemap: true,
      style: 'compressed'
    },
    files: [ {
      expand: true,
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>',
      src: [ '*.scss' ],
      dest: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>',
      ext: '.css'
    } ]
  }
};
