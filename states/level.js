var LevelState = function(game) {};

LevelState.prototype = {
	init: function() {

	},

	create: function() {
		this.spaceKey = this.game.input.keyboard
            .addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.fireBullet, this);

        this.shootSound = this.game.add.audio('shoot');
        this.background_1 = this.game.add.sprite(0, 0, 'background');
        this.background_2 = this.game.add.sprite(1024, 0, 'background');

        var player_walk = this.game.add.sprite(300, 400, 'player_walk');
        player_walk.animations.add('walk');
        player_walk.animations.play('walk', 10, true);
	},

	update: function() {
		this.moveBackground(this.background_1);
        this.moveBackground(this.background_2);
	},

    fireBullet: function() {
        // fire a bullet, play a sound.
        this.shootSound.play();
    },

    moveBackground: function(background) {
        if(background.x < -1023) {
            background.x = 1024;
            background.x -= 1;
        }
        background.x -= 1;
    }
};