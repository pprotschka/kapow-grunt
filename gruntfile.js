module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
      init: true,
      jitGrunt: {
          jitGrunt: true,
          // These help Grunt play nicely with certain plugins
          staticMappings: {
            respimages: 'grunt-responsive-images',
            scsslint: 'grunt-scss-lint',
            spritegen: 'grunt-responsive-images'
          }
      },
      // Anything you define within the main 'data' object can be accessed
      // both in the Gruntfile and in the individual task configurations e.g.
      // <%= wpInfo.theme_name %>
      data: {
        // Site specific settings
        siteInfo: {
          // Path to your assets folder - NO trailing slash
          assets_path: 'assets',
          // Asset directory names
          img_dir: 'img',
          js_dir: 'js',
          sass_dir: 'sass',
          css_dir: 'css'
        },

        // WordPress specific settings
        wpInfo: {
          theme_name: 'theme-name',
          wp_content: 'htdocs/wp-content',
          // Asset directory names in your theme
          img_dir: 'img',
          js_dir: 'js',
        },

        // Array of paths to WordPress plugin files that require linting
        wpPlugins: [
          '<%= wpInfo.wp_content %>/plugins/plugin-name/**/*.php',
        ],

        // Array of paths to Javascript files that will be concatenated
        // for inclusion in the <head>
        concatHead: [
            '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.js'
        ],

        // Array of paths to Javascript files that will be concatenated
        // for inclusion in the footer
        concatFoot: [
            '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.js'
        ],

        // Define image sizes for use with the responsive images task
        imgSizes: [
          {
            name: 'x-small',
            width: 450
          },
          {
            name: 'x-small-retina',
            suffix: '_2x',
            width: 900
          },
          {
            name: 'small',
            width: 800
          },
          {
            name: 'small-retina',
            suffix: '_2x',
            width: 1600
          },
          {
            name: 'medium',
            width: 1000
          },
          {
            name: 'medium-retina',
            suffix: '_2x',
            width: 2000
          },
          {
            name: 'large',
            width: 1400
          },
          {
            name: 'large-retina',
            suffix: '_2x',
            width: 2800
          },
          {
            name: 'x-large',
            width: 1600
          },
          {
            name: 'x-large-retina',
            width: 3200
          }]
    }
  });
  // Provides a summary of the time tasks have taken
  require('time-grunt')(grunt);
};
