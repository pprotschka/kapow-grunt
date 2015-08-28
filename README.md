# Kapow! Grunt

The Grunt component of the Kapow! framework/boilerplate for WordPress site development.

## About



Kapow! Grunt consists of tasks for:

- Processing, linting and documenting Sass
- Minifying and auto-prefixing CSS
- Generating a cache busting sprite from your PNG files
- Minifying images to reduce their file size
- Creating responsive image sizes
- Converting your PNGs to SVG alternatives
- Concatenating, uglifying, linting and documenting Javascript
- Linting and documenting PHP files in your theme and plugins
- Generating a custom Modernizr file based on your CSS & JS
- Cleaning and copying files
- Watching your files and invoking tasks when they change
- Notifying you when tasks have completed

## Requirements

Kapow! Grunt is designed to work along side the other Kapow! modules: [Skeleton](https://github.com/mkdo/kapow-skeleton), [Sass](https://github.com/mkdo/kapow-sass), [Theme](https://github.com/mkdo/kapow-theme).

Ensure that you have [NodeJS](https://nodejs.org/download/), [Grunt](http://gruntjs.com/installing-grunt) and [Bower](http://bower.io/#install-bower) installed as these are the minimum requirements.

Optionally you will need [PHP](http://php.net/manual/en/install.php) installed for theme/plugin linting, and [phpDocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html) to generate PHP documentation. If you'd like to lint your Sass with SCSS Lint you'll need to have  [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed.

If you intend to use responsive images you will need GraphicsMagick: you can install it by running `brew install GraphicsMagick` if you're on a Mac, or alternatively visit the [GraphicsMagick downloads page](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/).

## Installation

**1)** Run `npm install` and `bower install` to get the Node and Bower packages respectively. 

If you're planning on linting your Sass you will need to install SCSS Lint by running `gem install scss-lint`.

**2)** Open `gruntfile.js` and configure your Grunt settings accordingly including adding any additional bower/custom dependencies for concatenation, paths to plugins to be linted etc. The `siteInfo` and `wpInfo` settings objects shouldn't need to be altered if you're happy with Kapow!'s default structure.

**3)** Edit both `grunt/default.js` and `grunt/watch.js` and uncomment the relevant lines to enable features that are disabled out of the box:

**4)** Run `grunt` to perform an initial build!

**5)** Make a nice hot cup of tea/coffee and bask in your magnificence!

**NB**: If you run into trouble with permissions, you may need to prefix the above with sudo e.g. `sudo npm install`.

## Usage

Out of the box Kapow! Grunt is designed to work with the following folder structure:

    project_root/
      assets/
        css/
        img/
        js/
        sass/
      bower_components/
      documentation/
      grunt/
      htdocs
        /wp-content/
          theme-name/
            img/
              s/
      node_modules/
      reports/

However, with the exception of the `bower_components`, `grunt` and `node_modules` folders you can alter these paths in  `gruntfile.js` to suit your specific needs if you're dropping Kapow! Grunt into your own project structure.

Kapow!'s Grunt set-up has several features commented out by default such as code linting and documentation generation. Take a look at the following files to:

- `gruntfile.js` alter the main configuration
- `grunt/default.js` choose what runs as part of the main build task
- `grunt/watch.js` change what happens when certain files change

Several Grunt commands are at your disposal:

- `grunt` builds the project
- `grunt build` builds and then watches for changes
- `grunt docs` generates Sass, Javascript and PHP documentation
- `grunt lint` lint your Sass, Javascript and PHP for errors

**NB:** The `docs` and `lint` commands assume you have the required dependencies installed as detailed earlier.

## Changelog

**0.1.1** - *28.08.2015* - Updated inline documentation.

**0.1.0** - *03.06.2015* - Initial release, requires additional testing in the wild.
