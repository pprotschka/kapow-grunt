# Kapow! Grunt

The Grunt component of the Kapow! front-end boilerplate for WordPress builds, complete with linting, documentation and responsive image size generation.

## About

A more detailed overview of what Kapow! Grunt contains is coming Real Soon Now™...

## Installation

If you're not using this as part of the wider Kapow! set-up, you'll need to...

1) Ensure that you have the [NodeJS & NPM](https://nodejs.org/download/), [Bower](http://bower.io/#install-bower), [PHP](http://php.net/manual/en/install.php) and [Ruby](https://www.ruby-lang.org/en/documentation/installation/) on your machine to start with.

2) Run `npm install` and `bower install modernizr` to get the Node dependencies and Modernizr respectively.

3). If you intend to use responsive images you will need GraphicsMagick: you can install it by running `brew install GraphicsMagick` if you're on a Mac or alternatively visit the [GraphicsMagick downloads page](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/).

You can skip this step if you don't intend to use it: just make sure that you comment out or remove the calls to `respimages` in `grunt/default.js` and `grunt/watch.js`.

4) Install SCSS Lint with `gem install scss-lint` and also [install phpDocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html).

If you don't wish to use either of the above, open `grunt/aliases.json` and remove them from the `lint` array.

5) Finally, run `grunt` to perform an initial build of the project! 

You can also run `grunt build` to build & watch, `grunt docs` to generate JS, PHP and Sass documentation (assuming you're documenting your code of course) in the `docs/` folder or `grunt lint` to lint your JS, PHP and Sass with reports available in the `reports/` folder.

**NOTE**: If you encounter permissions issues with any of the above installation commands you may need to run them as sudo e.g. `sudo gem install scss-lint'.

## Useage


## Changelog

**0.1.0** - *03.06.2015* - Initial release, requires additional testing in the wild.
