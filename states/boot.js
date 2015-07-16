var BootState = function(game) {};

BootState.prototype = {
	preload: function() {
		// load preloader assets

	},
	create: function() {
		// setup the game environment
		// scale, input, etc...

		this.game.state.start('preload');
	}
};