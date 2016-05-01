if (FML.isModLoaded("ThaumicHorizons")) {
	
	NEI.override("ThaumicHorizons:focusIllumination", [15]);
	NEI.override("ThaumicHorizons:syringeInjection", [0,1]);
//	NEI.override("", [0]);

//	NEI.override_with_nbt("");
//	NEI.override_with_nbt("");
//	NEI.override_with_nbt("");
	
	NEI.hide("ThaumicHorizons:vatInterior");
	NEI.hide("ThaumicHorizons:evanescent");
	NEI.hide("ThaumicHorizons:light");
	NEI.hide("ThaumicHorizons:lightSolar");
	NEI.hide("ThaumicHorizons:golemPlacer");
	NEI.hide("ThaumicHorizons:dummyVat");
//	NEI.hide("");
	
}
