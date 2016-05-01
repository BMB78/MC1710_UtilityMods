var vanilla_blocks = ["portal", "end_portal", "fire", "water", "lava", "mob_spawner", "monster_egg"];

for each (block in vanilla_blocks){
	// Vanilla items and blocks have special handlers.
	NEI.hide("minecraft", block);
}

NEI.override("minecraft:wool", [0]);
NEI.override("minecraft:stained_glass", [0]);
NEI.override("minecraft:stained_hardened_clay", [0]);
NEI.override("minecraft:stained_glass_pane", [0]);
NEI.override("minecraft:carpet", [0]);

NEI.hide("minecraft:spawn_egg");
NEI.hide("minecraft:record*");
NEI.hide("minecraft:*slab");
NEI.hide("minecraft:*stairs");

//	NEI.override("", [0]);
//	NEI.override_with_nbt("");
//	NEI.hide("");

