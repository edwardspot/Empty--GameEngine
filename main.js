const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Attack2.png")
ASSET_MANAGER.queueDownload("./AttackCombo.png")
ASSET_MANAGER.queueDownload("./Swordwave.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new KnightAttack(gameEngine));
	gameEngine.addEntity(new KnightAttackCombo(gameEngine));
	gameEngine.addEntity(new SwordwaveProjectile(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
