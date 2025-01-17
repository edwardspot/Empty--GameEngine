const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/Attack2.png")
ASSET_MANAGER.queueDownload("./sprites/AttackCombo.png")
ASSET_MANAGER.queueDownload("./sprites/Swordwave.png")
ASSET_MANAGER.queueDownload("./sprites/Crouch.png")
ASSET_MANAGER.queueDownload("./sprites/CrouchWalk.png")
ASSET_MANAGER.queueDownload("./sprites/Death.png")
ASSET_MANAGER.queueDownload("./sprites/Fall.png")
ASSET_MANAGER.queueDownload("./sprites/Idle.png")
ASSET_MANAGER.queueDownload("./sprites/Jump.png")
ASSET_MANAGER.queueDownload("./sprites/Roll.png")
ASSET_MANAGER.queueDownload("./sprites/Run.png")



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new KnightAttack(gameEngine));
	gameEngine.addEntity(new KnightAttackCombo(gameEngine));
	gameEngine.addEntity(new SwordwaveProjectile(gameEngine));
	gameEngine.addEntity(new KnightCrouch(gameEngine));
	gameEngine.addEntity(new KnightCrouchWalk(gameEngine));
	gameEngine.addEntity(new KnightDeath(gameEngine));
	gameEngine.addEntity(new KnightFall(gameEngine));
	gameEngine.addEntity(new KnightIdle(gameEngine));
	gameEngine.addEntity(new KnightJump(gameEngine));
	gameEngine.addEntity(new KnightRoll(gameEngine));
	gameEngine.addEntity(new KnightRun(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
