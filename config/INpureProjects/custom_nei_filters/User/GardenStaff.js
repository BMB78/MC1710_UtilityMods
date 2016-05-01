if (FML.isModLoaded("GardenCore")) {
	
	NEI.override("GardenContainers:*_window_box", [0]);
	NEI.override("GardenContainers:*pot*", [0]);
	NEI.override("GardenContainers:pottery_pattern", [0]);
	NEI.override("GardenCore:soil_test_kit_used", [0]);
	NEI.override("GardenTrees:sapring", [0]);
	NEI.override("GardenTrees:thin_log", [0]);
	NEI.override("GardenTrees:thin_log_fence", [0]);
//	NEI.override("", [0]);
	
	NEI.hide("GardenCore:garden_farmland");
	NEI.hide("GardenCore:garden_proxy");
	NEI.hide("GardenCore:small_fire");
//	NEI.hide("");
	
}
