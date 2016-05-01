// Microblocks always require special handling.
if (FML.isModLoaded("BuildCraft|Transport")) {
	
	// Special handler that cleanly removes facades.
	BC.obliterate_facades(java.random(BC.getFacadesSize()));
	
	NEI.override("BuildCraft|Transport:pipeLens", [0, 16]);
	
	NEI.hide("BuildCraft|Transport:pipeBlock");
	
}

if (FML.isModLoaded("BuildCraft|Core")) {
	
	NEI.override("BuildCraft|Core:paintbrush", [0]);
	
}

if (FML.isModLoaded("BuildCraft|Silicon")) {
	
	NEI.override("BuildCraft|Silicon:redstone_board", [0]);
	NEI.override("BuildCraft|Silicon:robot", [0]);
	
}

//	NEI.override("", [0]);
//	NEI.override_with_nbt("");
//	NEI.hide("");

