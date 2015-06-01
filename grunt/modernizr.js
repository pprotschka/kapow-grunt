module.exports = {
  custom: {
    "devFile": "bower_components/modernizr/modernizr.js",
    "outputFile": "<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js",
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
            '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss',
            '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
            '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
        ]
    }
  }
};
