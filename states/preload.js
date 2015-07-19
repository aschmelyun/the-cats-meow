var PreloadState = function(game) {};

PreloadState.prototype = {
	preload: function() {
		// load all of the game assets
		// images, spritesheets, audio, etc...
		this.game.load.spritesheet('player_idle', 'assets/img/player_idle.png', 52, 60);
		this.game.load.spritesheet('player_walk', 'assets/img/player_walk.png', 52, 60);
		this.game.load.image('bullet', 'assets/img/sprite-bullet.png');
		this.game.load.image('street', 'assets/img/street.png');
		this.game.load.image('background', 'assets/img/background.png');
		this.game.load.audio('shoot', 'assets/sound/shoot.wav');
		this.game.load.audio('bg-menu', [
			'assets/music/bg-menu.mp3',
			'assets/music/bg-menu.ogg'
		]);
		this.game.load.audio('bg-level-1', [
			'assets/music/bg-level-1.mp3',
			'assets/music/bg-level-1.ogg'
		]);
	},
	
	create: function() {
		this.game.state.start('main_menu');
	}
};