var BULLET_DELAY = 500;
var BULLET_TIME = 500;
var BULLET_OFFSET_X = 54;
var BULLET_OFFSET_Y = 36;

var bullets,
    bg_music,
    fire_button,
    shoot_sound,
    background_one,
    background_two,
    player;

var LevelState = function(game) {};

LevelState.prototype = {
	init: function() {

	},

	create: function() {
        bg_music = this.game.add.audio('bg-level-1');
        bg_music.loop = true;
        bg_music.play();

		fire_button = this.game.input.keyboard
            .addKey(Phaser.Keyboard.SPACEBAR);
        up_button = this.game.input.keyboard
            .addKey(Phaser.Keyboard.UP);
        down_button = this.game.input.keyboard
            .addKey(Phaser.Keyboard.DOWN);

        shoot_sound = this.game.add.audio('shoot');

        background_one = this.game.add.sprite(0, 0, 'background');
        background_two = this.game.add.sprite(1024, 0, 'background');

        player = this.game.add.sprite(300, 400, 'player_walk');
        player.animations.add('walk');
        player.animations.play('walk', 10, true);

        bullets = this.game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, 'bullet');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 1);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);
	},

	update: function() {
		this.moveBackground(background_one);
        this.moveBackground(background_two);

        if(fire_button.isDown) {
            this.fireBullet();
        }
        if(up_button.isDown) {
            this.movePlayer('up');
        }
        if(down_button.isDown) {
            this.movePlayer('down');
        }
	},

    fireBullet: function() {
        // fire a bullet, play a sound.
        if (this.game.time.now > BULLET_TIME) {
            bullet = bullets.getFirstExists(false);

            if(bullet) {
                bullet.reset(player.x + BULLET_OFFSET_X, player.y + BULLET_OFFSET_Y);
                bullet.body.velocity.x = 300;
                BULLET_TIME = this.game.time.now + BULLET_DELAY;
                shoot_sound.play();
            }
        }
    },

    movePlayer: function(direction) {
        if(direction == 'down') {
            if(player.y >= 430) {
                player.y = 430;
                player.x = player.x;
            } else {
                player.y += 1;
                player.x -= 0.5;
            }
        } else if(direction == 'up') {
            if(player.y <= 370) {
                player.y = 370;
                player.x = player.x;
            } else {
                player.y -= 1;
                player.x += 0.5;
            }
        }
    },

    moveBackground: function(background) {
        if(background.x < -1023) {
            background.x = 1024;
            background.x -= 1;
        }
        background.x -= 1;
    }
};