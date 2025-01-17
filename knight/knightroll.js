class KnightRoll {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Roll.png"), 0, 0, 120, 100, 12, 0.05);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 0, 410);
	};
};