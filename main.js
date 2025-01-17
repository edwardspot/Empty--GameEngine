const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/knight/Attack2.png")
ASSET_MANAGER.queueDownload("./sprites/knight/AttackCombo.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Swordwave.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Crouch.png")
ASSET_MANAGER.queueDownload("./sprites/knight/CrouchWalk.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Death.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Fall.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Idle.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Jump.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Roll.png")
ASSET_MANAGER.queueDownload("./sprites/knight/Run.png")



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
