module.exports = {
    options: {
      // map: true,
      processors: [
        require('autoprefixer-core')({browsers: ['> 5%', 'last 2 versions' ]})
      ]
    },
    dist: {
      src: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/site.css'
    }
  }
