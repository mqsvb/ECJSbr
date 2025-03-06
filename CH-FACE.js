/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

/*

16/03/2022 - Dev Vinicius Marques | marques.vb2@gmail.com |

	Based on Planit© Examples Files
	Writed to Viecelli Móveis

*/

function mainChFace() {
	SetPackage(1);
	if (GetPCINumber("&3AXMILL") == 0) {
		nRet = MessageBox(_MB_ICONERROR, "CRIE ANTES, UMA SEQUENCIA DE USINAGEM");
		return 0;
	}

	var pickOptionOp = InitOperation("Operação CH Face Repeat", "", 0);
	var printTool

	AddUserModToOperation(pickOptionOp, "_radioToolAng", "Tool^08-1^DM45G^GRAU-45 (Rover321R)", "Repeat^Select Tool", 0, "");
	AddUserModToOperation(pickOptionOp, "_listRepeat", "Repeat^1x^2x^3x^4x^5x", "Repeat", 0, "");
	// Display the Dialog
	cmdRet = DoOperationMods(pickOptionOp);

		if (cmdRet !=-3) {
			Display("Operação CH Face Cancelada\\");
			return 0;
		}

	nSelectRepeat = GetPCIVariable("_listRepeat");
	nSelectRepeat = Number(nSelectRepeat);
	nPickToolAng = GetPCIVariable("_radioToolAng");

	if (nPickToolAng == 1) { printTool = "08-1" };
	if (nPickToolAng == 2) { printTool = "DM45G" };
	if (nPickToolAng == 3) { printTool = "GRAU-45" };

// Initialising command: Milling Cutter
cmd1 = InitCommand(36, 108);
// Clear the command modifiers
ClearMods(cmd1);
// Load required tool from ToolStore******************************************
LoadTool(cmd1, printTool);
gdh1 = InitDigInfo();
cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
Display("Tool " + printTool + " picked\n" + "Repeat " + nSelectRepeat + "x\n"); 


	function profilling() {

// Initialising command:- Profiling
cmd0 = InitCommand(22, 110);
ClearMods(cmd0);
// Setting modifier 'Disallow CRC Geometry with Taper'
SetModifier(cmd0, 365, "1");
// Setting modifier 'Model Type'
SetModifier(cmd0, 93, "Solid|3");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Climb|0");
// Setting modifier 'Pick Solid Faces'
SetModifier(cmd0, 338, "<Yes>");
// Setting modifier 'Prismatic Geometry'
SetModifier(cmd0, 92, "<Yes>");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "5");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "5");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "11500");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "None|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "35");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier 'Retract'
SetModifier(cmd0, 29, "5");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "10");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Detect Flat Land'
SetModifier(cmd0, 33, "<Yes>");
// Setting modifier 'Control'
SetModifier(cmd0, 131, "");
// Setting modifier 'NC Output Smoothing'
SetModifier(cmd0, 101, "Line Arc|1");
// Setting modifier 'Finish Shallow Areas'
SetModifier(cmd0, 246, "None|1");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 250, "Climb|0");
// Setting modifier 'Cut by Region'
SetModifier(cmd0, 60, "<Yes>");
// Setting modifier 'Optimise Path'
SetModifier(cmd0, 114, "Closest Next|2");
// Setting modifier 'Strategy'
SetModifier(cmd0, 208, "Sharp|2");
// Setting modifier 'Tool Control'
SetModifier(cmd0, 254, "Centre|0");
// Setting modifier 'Start/End'
SetModifier(cmd0, 209, "");
// Setting modifier 'Plunge Point'
SetModifier(cmd0, 210, "Automatic|0");
// Setting modifier 'Retract Point'
SetModifier(cmd0, 212, "Automatic|0");
// Setting modifier 'Type'
SetModifier(cmd0, 187, "Min/Max|1");
// Setting modifier 'Min/Max'
SetModifier(cmd0, 188, "Maximum Y|3");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "15");
// Setting modifier 'End'
SetModifier(cmd0, 118, "15");
// Setting modifier 'Overlap'
SetModifier(cmd0, 119, "0.0");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "Horizontal|1");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 134, "100");
// Setting modifier 'Equal Lead Moves'
SetModifier(cmd0, 11, "<Yes>");
// Setting modifier 'Angle'
SetModifier(cmd0, 24, "90");
// Setting modifier 'Length'
SetModifier(cmd0, 136, "15");
// Setting modifier 'Perpendicular'
SetModifier(cmd0, 213, "0.0");
// Setting modifier 'Links'
SetModifier(cmd0, 162, "");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 128, "5");
// Setting modifier 'Approach at Clearance'
SetModifier(cmd0, 98, "<Yes>");
// Setting modifier 'Type'
SetModifier(cmd0, 102, "Straight|0");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 129, "100");
// Setting modifier 'Type'
SetModifier(cmd0, 103, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 220, "5");
// Setting modifier 'Feed When Plunging'
SetModifier(cmd0, 13, "<Yes>");
// Setting modifier 'Rest Profiling'
SetModifier(cmd0, 170, "");
// Setting modifier 'Previous Tool Diameter'
SetModifier(cmd0, 230, "0.0");
nRet = ExecCommand(cmd0, -1);
	}
	
		for (var rep=0; rep<nSelectRepeat; rep++){
			profilling();
		}


// Initialising command:- Move to Toolchange
cmd0 = InitCommand(101, 41);
ClearMods(cmd0);
// Setting modifier 'Move relative to'
SetModifier(cmd0, 106, "Machine|1");
// Setting modifier 'First'
SetModifier(cmd0, 100, "Z|3");
nRet = ExecCommand(cmd0, -1);

	return 0;

}

mainChFace();