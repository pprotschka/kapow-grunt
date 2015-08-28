# Kapow! Grunt

The Grunt component of the Kapow! framework/boilerplate for WordPress site development.

## About

A more detailed overview of what Kapow! Grunt contains is coming Real Soon Now™...

## Requirements

Kapow! Grunt is designed to work along side the other Kapow! modules: [Skeleton](https://github.com/mkdo/kapow-skeleton), [Sass](https://github.com/mkdo/kapow-sass), [Theme](https://github.com/mkdo/kapow-theme).

Ensure that you have [NodeJS](https://nodejs.org/download/), [Grunt](http://gruntjs.com/installing-grunt) and [Bower](http://bower.io/#install-bower) installed as the bare minimum. You will need [PHP](http://php.net/manual/en/install.php) installed for theme/plugin linting, and [phpDocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html) if you wish to generate PHP documentation. If you'd like to lint your Sass with SCSS Lint you'll need to ensure that you have  [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed.

## Installation

If you're not using this as part of the wider Kapow! set-up, you'll need to...

1) Run `npm install` and `bower install modernizr` to get the Node dependencies and Modernizr respectively.

2). If you intend to use responsive images you will need GraphicsMagick: you can install it by running `brew install GraphicsMagick` if you're on a Mac or alternatively visit the [GraphicsMagick downloads page](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/).

You can skip this step if you don't intend to use it: just make sure that you comment out or remove the calls to `respimages` in `grunt/default.js` and `grunt/watch.js`.

3) If you intend to use SassDoc and PHPDoc you will need to install SCSS Lint with `gem install scss-lint` and also .

If you don't wish to use either of the above, open `grunt/aliases.json` and remove them from the `lint` array.

4)

5) Make a nice hot cup of tea/coffee and bask in your magnificence!

**NOTE**: If you encounter permissions issues with any of the above installation commands you may need to run them as sudo e.g. `sudo gem install scss-lint'.

## Usage

Edit the settings in `gruntfile.js` to suit your project and run `grunt` to perform an initial build!

You can run `grunt build` to build & watch, `grunt docs` to generate JS, PHP and Sass documentation (assuming you're documenting your code of course) in the `docs/` folder or `grunt lint` to lint your JS, PHP and Sass with reports available in the `reports/` folder.

By default, Kapow! Grunt is built around the following folder structure:

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

However, with the exception of the `bower_components`, `grunt` and `node_modules` folders you can alter these paths in  `gruntfile.js` to suit your specific needs.

## Changelog

**0.1.0** - *03.06.2015* - Initial release, requires additional testing in the wild.
