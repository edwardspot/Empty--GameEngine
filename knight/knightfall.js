class KnightFall {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Fall.png"), 0, 0, 112, 100, 3, 0.1);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 0, 260);
	};
};