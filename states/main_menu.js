var MainMenuState = function(game) {};

MainMenuState.prototype = {
	create: function() {
		this.enterKey = this.game.input.keyboard
			.addKey(Phaser.Keyboard.ENTER);

		this.enterKey.onDown.add(this.tweenPlayState, this);

		this.menuText = this.game.add.text(
			this.world.centerX,
			this.world.height/2,
			"",
			{
				size: "32px",
				fill: "#FFF",
				align: "center"
			}
		);
		this.menuText.anchor.setTo(0.5, 0.5);
		this.menuText.setText("Press Enter to Start");
	},

	tweenPlayState: function() {
		var tweenMenuShrink = this.game.add.tween({})
			.to({x: 0, y: 0}, 250);

		var tweenFadeIn = this.game.add.tween({})
			.to({alpha: 1}, 2000);

		tweenFadeIn.onComplete.add(function() {
			this.game.state.start('level');
		}, this);

		tweenMenuShrink.chain(tweenFadeIn);
		tweenMenuShrink.start();

	}
};