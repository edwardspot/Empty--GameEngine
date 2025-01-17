class KnightCrouchWalk {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/CrouchWalk.png"), 30, 0, 64, 100, 8, 0.1);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 20, 160);
	};
};