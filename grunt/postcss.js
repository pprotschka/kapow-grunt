module.exports = {
  options: {
      map: true,
      processors: [
        require('autoprefixer-core')({browsers: ['> 5%', 'last 2 versions', 'IE8', 'IE7' ]}),
      ]
    },
    dist: {
      src: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/site.css'
    }
  }
};
