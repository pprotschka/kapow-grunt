// PHPlint Task - https://github.com/jgable/grunt-phplint
// ----------------------------------------------------------------------------
module.exports = {
	all: [
		'<%= wpPlugins %>',
		'<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/**/*.php'
	],
	plugins: [ '<%= wpPlugins %>' ],
	theme: [ '<%= wpInfo.wp_content %>/<%= wpInfo.themes_dir %>/<%= wpInfo.theme_name %>/**/*.php' ]
};
