// Grunticon Task - https://github.com/filamentgroup/grunticon
// ----------------------------------------------------------------------------
module.exports = {
	icons: {
		files: [{
			expand: true,
			cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.icons_dir %>/',
			src: ['*.svg', '*.png'],
			dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.assets_dir %>/<%= wpInfo.icons_dir %>',
		}],
		options: {
			enhanceSVG: true,
			compressPNG: true,
			loadersnippet: 'grunticon-loader.js',
			pngpath: 'assets'
		}
	}
}
