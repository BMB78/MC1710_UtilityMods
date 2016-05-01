if (FML.isModLoaded("OpenBlocks")) {

	NEI.override("OpenBlocks:elevator", [0]);
	NEI.override("OpenBlocks:elevator_rotating", [0]);
	NEI.override("OpenBlocks:tank", [0]);
	NEI.override("OpenBlocks:imaginary", [0, 1]);
	NEI.override("OpenBlocks:crayonGlasses", [0]);
	NEI.override("OpenBlocks:paintBrush", [0]);
//	NEI.override("", [0]);

	NEI.hide("OpenBlocks:paintcan");
	NEI.hide("OpenBlocks:technicolorGlasses");
	NEI.hide("OpenBlocks:seriousGlasses");
	NEI.hide("OpenBlocks:stencil");
	NEI.hide("OpenBlocks:trophy");
//	NEI.hide("");

}
