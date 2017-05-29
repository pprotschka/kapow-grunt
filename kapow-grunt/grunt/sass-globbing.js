// Sass Globbing Task - https://github.com/DennisBecker/grunt-sass-globbing
// ----------------------------------------------------------------------------
module.exports = {

  scss: {
		files: {
			'src/_importMap.scss': 'src/partials/**/*.scss',
			'src/_variablesMap.scss': ['src/variables/**/*.scss', '!src/variables/foo.css'],
		},
		options: {
			useSingleQuotes: false,
			signature: ''
		}
	}
}
