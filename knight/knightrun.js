class KnightRun {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Run.png"), 0, 0, 120, 100, 10, 0.1);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 0, 470);
	};
};