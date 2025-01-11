class KnightAttackCombo {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./AttackCombo.png"), 0, 0, 95, 100, 10, 0.1);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 200);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Attack3.png"),0,0);
	};
};