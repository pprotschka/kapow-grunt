// Modernizr Task - https://github.com/Modernizr/grunt-modernizr
// ----------------------------------------------------------------------------
module.exports = {
    // Generate a custom Modernizr build
    // based on the checks found in our
    // Sass & Javascript.
    // -------------------------------------
    custom: {
        "cache": true,
        "uglify": false,
        "options": [
            "domPrefixes",
            "prefixes",
            "mq",
            "prefixed",
            "testAllProps",
            "testProp",
            "setClasses"
        ],
        "tests": [],
        "excludeTests": [
            "hidden"
        ],
        "devFile": "bower_components/modernizr/modernizr.js",
        "dest": "<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js",
        "crawl": true,
        "files": {
            "src": [
                '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss',
                '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
                '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
            ]
        }
    }
};
