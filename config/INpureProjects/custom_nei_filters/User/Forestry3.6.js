function Hide_Custom(domain) {
NEI.override(domain, [0]);
NEI.hide(domain);
}

if (FML.isModLoaded("Forestry")) {
	
	NEI.override("Forestry:ffarm", [0, 2, 3, 4, 5]);
	NEI.override("Forestry:stained", [0]);
//	NEI.override("", [0]);
	
	NEI.hide("Forestry:resources");
	NEI.hide("Forestry:resourceStorage");
	NEI.hide("Forestry:beehives");
	NEI.hide("Forestry:candle");
	NEI.hide("Forestry:stump");
	NEI.hide("Forestry:log*");
	NEI.hide("Forestry:fireproofLog*");
	NEI.hide("Forestry:planks*");
	NEI.hide("Forestry:fireproofPlanks*");
	NEI.hide("Forestry:slabs*");
	NEI.hide("Forestry:fences*");
	NEI.hide("Forestry:stairs");
	NEI.hide("Forestry:sapling");
	NEI.hide("Forestry:leaves");
	NEI.hide("Forestry:mail");
	NEI.hide("Forestry:fluid.*");
	NEI.hide("Forestry:ingot*");
	NEI.hide("Forestry:wrench");
	NEI.hide("Forestry:*Pickaxe");
	NEI.hide("Forestry:*Shovel");
	NEI.hide("Forestry:waxCapsule*");
//	NEI.hide("Forestry:can*");
	NEI.hide("Forestry:refractory*");
//	NEI.hide("Forestry:beeCombs");
	NEI.hide("Forestry:stamps");
	NEI.hide("Forestry:letters");
	NEI.hide("Forestry:crated*");
//	NEI.hide("");
	
	NEI.hide("Forestry:beeQueenGE");
	NEI.hide("Forestry:beeDroneGE");
	NEI.hide("Forestry:beePrincessGE");
	NEI.hide("Forestry:beeLarvaeGE");
	NEI.hide("Forestry:saplingGE");
	NEI.hide("Forestry:pollenFertile");
	NEI.hide("Forestry:butterflyGE");
	NEI.hide("Forestry:serumGE");
	NEI.hide("Forestry:caterpillarGE");
//	NEI.hide("");
	
}
