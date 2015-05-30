module.exports = {
  custom: {
    "devFile": "bower_components/modernizr/modernizr.js",
    "outputFile": "assets/js/lib/modernizr-custom.js",
    "extra": {
        "shiv": true,
        "printshiv": true,
        "load": true,
        "mq": true,
        "cssclasses": true
    },
    // We're uglifying in a separate task,
    // so avoid the overhead here
    "uglify": false,

    "files": {
        "src": [
            'assets/**/*.scss',
            'assets/**/*.js',
            '!assets/js/modernizr-custom.js'
        ]
    }
  }
};
