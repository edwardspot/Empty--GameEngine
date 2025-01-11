class SwordwaveProjectile {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Swordwave.png"), 0, 0, 90, 100, 4, 0.1);
		this.x = 0;
		this.y = 0;
		this.speed = 1000;	

	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if (this.x > 1024) this.x = 0;

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, 160);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Attack3.png"),0,0);
	};
};