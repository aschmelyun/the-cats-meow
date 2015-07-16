var PreloadState = function(game) {};

PreloadState.prototype = {
	preload: function() {
		// load all of the game assets
		// images, spritesheets, audio, etc...
		this.game.load.image('player', 'assets/player.png');
	},
	
	create: function() {
		this.game.state.start('main_menu');
	}
};