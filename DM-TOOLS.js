/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***

function dmTools() {
	SetPackage(1);
	if (GetPCINumber("&3AXMILL") == 0) {
		nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
		return 0;
	}
	if (nRet != -3) {
		return 0;
	}

	var selectEsp = InitOperation("DM TOOLS", "", 0);
	var printAll

	
	AddUserModToOperation(selectEsp, "_radioTool", "Ferramenta^VIDIA7  (7mm)^DIAM-16 (16mm)^FRESA EM V", "^Select Tool", 0, "");
	

	// Display the Dialog
	cmdRet = DoOperationMods(selectEsp);

	if (cmdRet !=-3) {

		Display("Operação CH-Wire v2 Cancelled\\");
		return 0;
	}

	nselectEsp = GetPCIVariable("_realEsp");
	nselectEsp = Number(nselectEsp);
	nPickTool = GetPCIVariable("_radioTool");

	Display("Espessura " +nselectEsp+ "mm\\");
	
	if (nPickTool == 1) { printTool = "VIDIA7" };
	if (nPickTool == 2) { printTool = "DIAM-16" };
	if (nPickTool == 3) { printTool = "FRESAEMV" };

	// Initialising command: Milling Cutter
	cmd1 = InitCommand(36, 108);
	// Clear the command modifiers
	ClearMods(cmd1);
	// Load required tool from ToolStore******************************************
	LoadTool(cmd1, printTool);
	gdh1 = InitDigInfo();
	cmdret = ExecCommand(cmd1, gdh1);
	FreeDigInfo(gdh1);

	
}

dmTools();
