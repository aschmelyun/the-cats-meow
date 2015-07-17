var LevelState = function(game) {};

LevelState.prototype = {
	init: function() {

	},

	create: function() {
		background = game.add.tileSprite(0, 0, 1024, 500, 'background');

		var player_walk = this.game.add.sprite(300, 400, 'player_walk');
		player_walk.animations.add('walk');
		player_walk.animations.play('walk', 16, true);
	},

	update: function() {
		
	}
};