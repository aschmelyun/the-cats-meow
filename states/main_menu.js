var MainMenuState = function(game) {};

MainMenuState.prototype = {
	create: function() {
		this.spaceKey = this.game.input.keyboard
			.addKey(Phaser.Keyboard.SPACEBAR);

		this.spaceKey.onDown.add(this.transitionToStart, this);

		this.background = this.game.add.tileSprite(0, 0, 1024, 500, 'street');

		var player_idle = this.game.add.sprite(300, 400, 'player_idle');
		player_idle.animations.add('idle');
		player_idle.animations.play('idle', 10, true);

		this.menuText = this.game.add.text(
			this.world.centerX,
			this.world.height/2,
			"",
			{
				font: "18px '8bit_wondernominal'",
				fill: "#FFF",
				align: "center"
			}
		);
		this.menuText.anchor.setTo(0.5, 0.5);
		this.menuText.setText("Press Space to Start");
	},

	transitionToStart: function() {

		this.game.state.start('level');

	}
};