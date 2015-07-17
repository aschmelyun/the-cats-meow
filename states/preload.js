var PreloadState = function(game) {};

PreloadState.prototype = {
	preload: function() {
		// load all of the game assets
		// images, spritesheets, audio, etc...
		this.game.load.spritesheet('player_idle', 'assets/img/player_idle.png', 52, 60);
		this.game.load.image('background', 'assets/img/street.png');
	},
	
	create: function() {
		this.game.state.start('main_menu');
	}
};