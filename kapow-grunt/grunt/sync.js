// Sync Task - https://github.com/tomusdrw/grunt-sync
// ----------------------------------------------------------------------------
module.exports = {
	// Sync bower assets into the theme
	bower_sync: {
		files: '<%= bowerAssets %>',
	},
}
