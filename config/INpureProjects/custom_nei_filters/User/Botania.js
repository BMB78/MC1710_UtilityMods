if (FML.isModLoaded("Botania")) {

	NEI.override("Botania:customBrick", [0]);
	NEI.override("Botania:shinyFlower", [0]);
	NEI.override("Botania:miniIsland", [0]);
	NEI.override("Botania:flower", [0]);
	NEI.override("Botania:manaBeacon", [0]);
	NEI.override("Botania:unstableBlock", [0]);
	NEI.override("Botania:dye", [0]);
	NEI.override("Botania:manaPetal", [0]);
	NEI.override("Botania:petal", [0]);
	NEI.override("Botania:petalBlock", [0]);
//	NEI.override("", [0]);
	
	NEI.hide("Botania:floatingSpecialFlower");
	NEI.hide("Botania:*Slab*");
	NEI.hide("Botania:quartzType*");
	NEI.hide("Botania:*Stairs*");
	NEI.hide("Botania:buriedPetals");
	NEI.hide("Botania:manaFlame");
	NEI.hide("Botania:mushroom");
	NEI.hide("Botania:doubleFlower1");
	NEI.hide("Botania:doubleFlower2");
//	NEI.hide("");

}
