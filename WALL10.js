/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0){
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}

var selectDepth = InitOperation("WALL10", "", 0);
var printDepth
var selectFerr = 0
var selectTipo = 0
var levelWall = 0


		AddUserModToOperation(selectDepth, "_radioTool",  "Depth^Z-2^Z0^Z+2",  "Geral", 0, "");
		AddUserModToOperation(selectDepth, "_radioFerr",  "Tools^ELI-10^99",  "Ferramentas", 0, "");
		AddUserModToOperation(selectDepth, "_radioTipo",  "Type^Wireframe^Solid",  "Geral", 0, "");
		

		// Display the Dialog
		cmdRet = DoOperationMods(selectDepth);
		
					if (cmdRet!=-3){
				
				Display("Wall-10 Cancelada\\");
				return 0;
			}	
		
				
		nselectDepth    =	GetPCIVariable("_radioTool");
		nselectDepth 	=	Number(nselectDepth);
		
		nValorFerr	=	GetPCIVariable("_radioFerr");
		
		nValorTipo	=	GetPCIVariable("_radioTipo");
		
				
		if(nselectDepth==1){printDepth=-2}
		if(nselectDepth==2){printDepth=0}
		if(nselectDepth==3){printDepth=2} 	
			
		//alert('select= ' + nselectDepth);					
		//alert('print= ' + printDepth);
		
		if (nValorFerr==1) {
			// Initialising command: Milling Cutter
        cmd1 = InitCommand(36, 108);
        
		// Clear the command modifiers
        ClearMods(cmd1);
        
		// Load required tool from ToolStore
        LoadTool(cmd1, "ELI-10");
        	
        	gdh1 = InitDigInfo();
        	cmdret = ExecCommand(cmd1, gdh1);
        	FreeDigInfo(gdh1);
		}
		
		if (nValorFerr==2) {
			// Initialising command: Milling Cutter
        cmd1 = InitCommand(36, 108);
        
		// Clear the command modifiers
        ClearMods(cmd1);
        
		// Load required tool from ToolStore
        LoadTool(cmd1, "99");
        	
        	gdh1 = InitDigInfo();
        	cmdret = ExecCommand(cmd1, gdh1);
        	FreeDigInfo(gdh1);
		}
		
		
		//alert ("nValorFerr = " + nValorFerr)
		//alert ("nValorTipo = " + nValorTipo)
						
		

// Initialising command:- Profiling
cmd0 = InitCommand(22, 110);
ClearMods(cmd0);
// Setting modifier 'Disallow CRC Geometry with Taper'
SetModifier(cmd0, 365, "1");

// Setting modifier 'Model Type'**********************************************************************
// Setting modifier 'Pick Solid Faces'
	if (nValorTipo==1){
SetModifier(cmd0, 93, "Wireframe|1");
SetModifier(cmd0, 338, "<No>");
	}
	else if (nValorTipo==2){
SetModifier(cmd0, 93, "Solid|3");
SetModifier(cmd0, 338, "<Yes>");
	}

// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Climb|0");
// Setting modifier 'Prismatic Geometry'
SetModifier(cmd0, 92, "<Yes>");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "3");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "3");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "Geometry|3");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "30");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier 'Retract'
SetModifier(cmd0, 29, "5");
// Setting modifier 'Level'

	if (nValorTipo==1){
		if (nselectDepth==2){
		alert("Depth não pode ser Z0 quando usado Wireframe")
		Display("Wall-10 Cancelada\\");
		return 0;
		}
	}
SetModifier(cmd0, 161, levelWall);
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier 'Depth' ******************************************************************
SetModifier(cmd0, 9, printDepth);

// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "55");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
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
SetModifier(cmd0, 208, "Round|1");
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
SetModifier(cmd0, 188, "Minimum X|0");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "10");
// Setting modifier 'End'
SetModifier(cmd0, 118, "10");
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
SetModifier(cmd0, 136, "5");
// Setting modifier 'Perpendicular'
SetModifier(cmd0, 213, "0.0");
// Setting modifier 'Links'
SetModifier(cmd0, 162, "");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 128, "25");
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

main();
