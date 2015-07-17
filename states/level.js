var LevelState = function(game) {};

LevelState.prototype = {
	init: function() {

	},

	create: function() {
		this.spaceKey = this.game.input.keyboard
            .addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.fireBullet, this);

        this.shootSound = this.game.add.audio('shoot');
	},

	update: function() {
		
	},

    fireBullet: function() {
        // fire a bullet, play a sound.
        this.shootSound.play();
    }
};