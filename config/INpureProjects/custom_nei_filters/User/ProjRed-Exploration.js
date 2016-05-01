if (FML.isModLoaded("ProjRed|Exploration")) {
	
	NEI.override("ProjRed|Exploration:projectred.exploration.backpack", [0]);
	NEI.override("ProjRed|Exploration:projectred.exploration.lilyseed", [0]);
//	NEI.override("", [0]);
	
	NEI.hide("ProjRed|Exploration:projectred.exploration.ore");
	NEI.hide("ProjRed|Exploration:projectred.exploration.stone");
	NEI.hide("ProjRed|Exploration:projectred.exploration.stonewalls");
//	NEI.hide("");
	
}
