if (FML.isModLoaded("Thaumcraft")) {

	NEI.override("Thaumcraft:blockCandle", [0]);
	NEI.override("Thaumcraft:ItemEssence", [0]);
//	NEI.override("", [0]);

	NEI.hide("Thaumcraft:blockFlux*");
	NEI.hide("Thaumcraft:blockFluid*");
	NEI.hide("Thaumcraft:blockCustomOre");
	NEI.hide("Thaumcraft:ItemNugget");
	NEI.hide("Thaumcraft:ItemSpawnerEgg");
	NEI.hide("Thaumcraft:ItemWispEssence");
	NEI.hide("Thaumcraft:blockArcaneDoor");
	NEI.hide("Thaumcraft:blockMagicBox");
	NEI.hide("Thaumcraft:blockManaPod");
	NEI.hide("Thaumcraft:blockArcaneFurnace");
	NEI.hide("Thaumcraft:blockWarded");
	NEI.hide("Thaumcraft:blockHole");
	NEI.hide("Thaumcraft:blockPortalEldritch");
//	NEI.hide("");

}
