module.exports = {
  options: {
      map: true,
      processors: [
        require('autoprefixer-core')({browsers: ['> 5%', 'last 2 versions', 'IE8', 'IE7' ]}),
      ]
    },
    dist: {
      src: 'assets/css/site.css'
    }
  }
};
