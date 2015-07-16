var game = new Phaser.Game(1024, 500, Phaser.AUTO, 'game-area');

game.state.add('boot', BootState);
game.state.add('preload', PreloadState);
game.state.add('main_menu', MainMenuState);
game.state.add('level', LevelState);

game.state.start('boot');