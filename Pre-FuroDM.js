/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
/*

11/06/2021 - Dev Vinicius Marques | marques.vb2@gmail.com |

	Based on Planit© Examples Files
	Writed in VS Code


*/

function preFuroDM(){
	
	SetPackage(1);
	if (GetPCINumber("&3AXMILL") == 0){
		nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
		return 0;
	}
	
	if(Dialog()) Generate();

	function Dialog(){
		var preFuroDM = InitOperation("Pre-Furo FerrDM", "", 0);
		
		AddUserModToOperation(preFuroDM, "_realLevel",  "Level",  "^Profilling", 0, "15");
		AddUserModToOperation(preFuroDM, "_realDepth", "Depth (-)", "^Profilling", 0,"-18");	
		AddUserModToOperation(preFuroDM, "_realIncrement", "Inc Helix", "^Profilling", 0,"5");
		AddUserModToOperation(preFuroDM, "_realRaio",  "Raio",  "^Circle Design", 0, "50");


		// Display the Dialog
		cmdRet = DoOperationMods(preFuroDM);
		
			if (cmdRet!=-3){
				
			Display("Pre-Furo FerrDM Cancelada\\");
			return 0;
			}	
			
		//Read PCI variables
		
		levelOpdm = GetPCINumber("_realLevel");
		depthOpdm = GetPCINumber("_realDepth");
		incOpdm = GetPCINumber("_realIncrement");
		raioOpdm = GetPCINumber("_realRaio");
		
		return 1;
	}
		
	
		function Generate(){
			
		// Initialising command:- Arc
		var cmd1 = InitCommand(2, 2); 
		ClearMods(cmd1); 
		// Setting modifier 'Radius'*******************************************************
		SetModifier(cmd1, 104, raioOpdm); 
		// Setting modifier 'Colour'
		SetModifier(cmd1, 1, "Yellow|5"); 
		// Setting modifier 'Layer'
		SetModifier(cmd1, 3, "Pre-FuroDM"); 
		// Setting modifier 'Style'
		SetModifier(cmd1, 2, "Solid|0"); 
			var gdh1 = InitDigInfo();
			nRet = AskDig("Coordenada Furo", "PICKDM"); 		
			var dmXcoord = GetPCIVariable("X@PICKDM");
			var dmYcoord = GetPCIVariable("Y@PICKDM");
			AddFreeDig(gdh1 , "X"+dmXcoord+"Y"+dmYcoord+"Z0");	
		// Finish input
		//AddFinishDig(gdh1, _FINISH);
		ExecCommand(cmd1, gdh1); 
		FreeDigInfo(gdh1);  


		// Initialising command:- Point
		var cmd1 = InitCommand(2, 36); 
		ClearMods(cmd1); 
		// Setting modifier 'Colour'
		SetModifier(cmd1, 1, "Yellow|5"); 
		// Setting modifier 'Layer'
		SetModifier(cmd1, 3, "Pre-FuroDM"); 
		// Setting modifier 'Style'
		SetModifier(cmd1, 2, "Solid|0"); 
		var gdh1 = InitDigInfo();
		// Add Free dig to Selection input data
		AddFreeDig(gdh1 , "X"+dmXcoord+"Y"+dmYcoord+"Z0");
		// Finish input
		//AddFinishDig(gdh1, _FINISH);
		var cmdret = ExecCommand(cmd1, gdh1); 
		FreeDigInfo(gdh1); 

		

		// Initialising command: Milling Cutter
        cmd1 = InitCommand(36, 108);        
		// Clear the command modifiers
        ClearMods(cmd1);        
		// Load required tool from ToolStore
        LoadTool(cmd1, "DM25-25");        	
		gdh1 = InitDigInfo();
		cmdret = ExecCommand(cmd1, gdh1);
		FreeDigInfo(gdh1);
		
		
				
		// Initialising command:- Profiling WIREFFRAME HELIX
		cmd0 = InitCommand(22, 110);
		ClearMods(cmd0);
		// Setting modifier 'Disallow CRC Geometry with Taper'
		SetModifier(cmd0, 365, "1");
		// Setting modifier 'Model Type'
		SetModifier(cmd0, 93, "Wireframe|1");
		// Setting modifier 'Mill Type'
		SetModifier(cmd0, 137, "Conventional|1");
		// Setting modifier 'Tolerance'
		SetModifier(cmd0, 62, "0.05");
		// Setting modifier 'Comment'
		SetModifier(cmd0, 295, "* * * * * * * * Checar Avanço Alto ");
		// Setting modifier 'Feedrate'
		//SetModifier(cmd0, 5, "10");
		// Setting modifier 'Plunge Feed'
		//SetModifier(cmd0, 6, "10");
		// Setting modifier 'Speed'
		//SetModifier(cmd0, 7, "18000");
		// Setting modifier 'Technology'
		SetModifier(cmd0, 77, "Finish|2");
		// Setting modifier 'Compensation'
		SetModifier(cmd0, 21, "Geometry|3");
		// Setting modifier 'Depth'
		SetModifier(cmd0, 197, "");
		// Setting modifier 'Clearance' **********************************
		SetModifier(cmd0, 28, levelOpdm+30);
		// Setting modifier 'Level' **************************************
		SetModifier(cmd0, 161, levelOpdm);
		// Setting modifier 'Depth' **************************************
		SetModifier(cmd0, 9, depthOpdm);
		// Setting modifier 'Cut Increment' ******************************
		SetModifier(cmd0, 10, incOpdm); 
		// Setting modifier 'Helical'
		SetModifier(cmd0, 143, "<Yes>");
		// Setting modifier 'Finish At'
		SetModifier(cmd0, 107, "Clearance|2");
		// Setting modifier 'Control'
		SetModifier(cmd0, 131, "");
		// Setting modifier 'NC Output Smoothing'
		SetModifier(cmd0, 101, "Line Arc|1");
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
		SetModifier(cmd0, 187, "Longest Side|2");
		// Setting modifier 'Longest Side'
		SetModifier(cmd0, 190, "Straight|0");
		// Setting modifier 'Proportional Distance'
		SetModifier(cmd0, 193, "0.5");
		// Setting modifier 'Start'
		SetModifier(cmd0, 117, "0");
		// Setting modifier 'End'
		SetModifier(cmd0, 118, "0");
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
		SetModifier(cmd0, 136, "10");
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
		// Setting modifier 'Contouring'
		SetModifier(cmd0, 180, "");
		// Setting modifier 'CornerType'
		SetModifier(cmd0, 94, "Round|1");
		nRet = ExecCommand(cmd0, -1);
		
do
{

// Initialising command:- Profiling
cmd0 = InitCommand(22, 110);
ClearMods(cmd0);
// Setting modifier 'Wireframe'
SetModifier(cmd0, -1010, "");
// Setting modifier 'Surfaces'
SetModifier(cmd0, -2001, "");
// Setting modifier 'Solid'
SetModifier(cmd0, -2002, "");
// Setting modifier 'Boundary'
SetModifier(cmd0, -2011, "");
// Setting modifier 'Check Surfaces'
SetModifier(cmd0, -2003, "");
// Setting modifier 'Start Point'
SetModifier(cmd0, -2006, "");
// Setting modifier 'Start/End Points'
SetModifier(cmd0, -2007, "");
// Setting modifier 'Plunge Points'
SetModifier(cmd0, -2004, "");
// Setting modifier 'Retract Points'
SetModifier(cmd0, -2005, "");
// Setting modifier 'Contour Walls'
SetModifier(cmd0, -2008, "");
// Setting modifier 'Disallow CRC Geometry with Taper'
SetModifier(cmd0, 365, "1");
// Setting modifier 'Model Type'
SetModifier(cmd0, 93, "Solid|3");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Conventional|1");
// Setting modifier 'Prismatic Geometry'
SetModifier(cmd0, 92, "<Yes>");
// Setting modifier 'Offset'
SetModifier(cmd0, 12, "");
// Setting modifier 'Z Offset'
SetModifier(cmd0, 34, "");
// Setting modifier 'XY Offset'
SetModifier(cmd0, 35, "");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Minimum Radius'
SetModifier(cmd0, 158, "");
// Setting modifier 'Multiple Passes'
SetModifier(cmd0, 191, "");
// Setting modifier 'Start Offset'
SetModifier(cmd0, 176, "");
// Setting modifier 'Offset Increment'
SetModifier(cmd0, 178, "");
// Setting modifier 'Number of Spring Cuts'
SetModifier(cmd0, 296, "");
// Setting modifier 'Comment'
SetModifier(cmd0, 295, "");
// Setting modifier 'Feed'
SetModifier(cmd0, 199, "");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "10");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "10");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "18000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "Finish|2");
// Setting modifier 'CRC'
SetModifier(cmd0, 216, "");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "Geometry|3");
// Setting modifier 'CRC Register'
SetModifier(cmd0, 179, "");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "35");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier ''
SetModifier(cmd0, 236, "");
// Setting modifier 'Retract'
SetModifier(cmd0, 29, "5");
// Setting modifier ''
SetModifier(cmd0, 233, "");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "1");
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier ''
SetModifier(cmd0, 234, "");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "-3");
// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier ''
SetModifier(cmd0, 235, "");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "50");
// Setting modifier 'Cusp Height'
SetModifier(cmd0, 200, "");
// Setting modifier ''
SetModifier(cmd0, 275, "");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Flat Land'
SetModifier(cmd0, 14, "");
// Setting modifier 'Control'
SetModifier(cmd0, 131, "");
// Setting modifier 'Minimum Contact Angle'
SetModifier(cmd0, 228, "");
// Setting modifier 'NC Output Smoothing'
SetModifier(cmd0, 101, "Line Arc|1");
// Setting modifier 'Maximum Contact Angle'
SetModifier(cmd0, 229, "");
// Setting modifier 'Finish Shallow'
SetModifier(cmd0, 195, "");
// Setting modifier 'Finish Shallow Areas'
SetModifier(cmd0, 246, "None|1");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 250, "Climb|0");
// Setting modifier 'Optimisation'
SetModifier(cmd0, 192, "");
// Setting modifier 'Cut by Region'
SetModifier(cmd0, 60, "<Yes>");
// Setting modifier 'Optimise Path'
SetModifier(cmd0, 114, "Closest Next|2");
// Setting modifier 'Corners'
SetModifier(cmd0, 217, "");
// Setting modifier 'Strategy'
SetModifier(cmd0, 208, "Round|1");
// Setting modifier 'Check Surfaces'
SetModifier(cmd0, 224, "");
// Setting modifier 'Boundary Control'
SetModifier(cmd0, 253, "");
// Setting modifier 'Tool Control'
SetModifier(cmd0, 254, "Centre|0");
// Setting modifier 'Offset'
SetModifier(cmd0, 255, "");
// Setting modifier 'Start/End'
SetModifier(cmd0, 209, "");
// Setting modifier 'Plunge Point'
SetModifier(cmd0, 210, "Pick|1");
// Setting modifier 'Retract Point'
SetModifier(cmd0, 212, "Automatic|0");
// Setting modifier 'Start/End Point Preference'
SetModifier(cmd0, 186, "");
// Setting modifier 'Type'
SetModifier(cmd0, 187, "Near Plunge/Retract|4");
// Setting modifier 'Profile Extension'
SetModifier(cmd0, 116, "");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "22");
// Setting modifier 'End'
SetModifier(cmd0, 118, "22");
// Setting modifier 'Overlap'
SetModifier(cmd0, 119, "");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "Horizontal|1");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 134, "100");
// Setting modifier 'Equal Lead Moves'
SetModifier(cmd0, 11, "<Yes>");
// Setting modifier 'Lead In'
SetModifier(cmd0, 196, "");
// Setting modifier 'Angle'
SetModifier(cmd0, 24, "90");
// Setting modifier 'Lead Radius'
SetModifier(cmd0, 25, "");
// Setting modifier 'Length'
SetModifier(cmd0, 136, "5");
// Setting modifier 'Perpendicular'
SetModifier(cmd0, 213, "0.0");
// Setting modifier 'Lead Out'
SetModifier(cmd0, 198, "");
// Setting modifier 'Links'
SetModifier(cmd0, 162, "");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 128, "5");
// Setting modifier 'Approach at Clearance'
SetModifier(cmd0, 98, "<Yes>");
// Setting modifier 'Short Links'
SetModifier(cmd0, 203, "");
// Setting modifier 'Type'
SetModifier(cmd0, 102, "Straight|0");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 129, "100");
// Setting modifier 'Long Links'
SetModifier(cmd0, 204, "");
// Setting modifier 'Type'
SetModifier(cmd0, 103, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 220, "5");
// Setting modifier 'Cut Increment Stand Off'
SetModifier(cmd0, 349, "");
// Setting modifier 'Feed When Plunging'
SetModifier(cmd0, 13, "<Yes>");
// Setting modifier 'Rest Profiling'
SetModifier(cmd0, 170, "");
// Setting modifier 'Previous Tool Diameter'
SetModifier(cmd0, 230, "");
// Setting modifier 'Previous Minimum Radius'
SetModifier(cmd0, 231, "");
// Setting modifier 'Contouring'
SetModifier(cmd0, 180, "");
nRet = AskMods(cmd0);
if (nRet != _FINISH)
{
	return 0;
}
nRet = ExecCommand(cmd0, -1);

} while(nRet == _ESCAPE);
		
		
		/// Initialising command:- Move to Toolchange
		cmd0 = InitCommand(101, 41);
		ClearMods(cmd0);
		// Setting modifier 'Move relative to'
		SetModifier(cmd0, 106, "Machine|1");
		// Setting modifier 'First'
		SetModifier(cmd0, 100, "Z|3");
		nRet = ExecCommand(cmd0, -1);

	/* 	var gdh1 = InitDigInfo();
		BeginDigArray(gdh1, _ENTITYDIG);
		AddDigInfoEntnoDig(FindEntityNo(_FINDENTNO_FROM_BASEENT, 2, 1, 0), _DIG_3DSNAP+_DIG_TANGENT+_DIG_2DCHAIN, _DIR_REVERSE);
		// World Selection Coordinates X, Y, Z
		//AddDigInfoRelWorld(218.626, 35.7239);
		AddDigInfoRelWorld(300, 35.7239); 

		AddDigArray(gdh1);
		// Finish input
		AddFinishDig(gdh1, _FINISH);

		var cmdret = ExecCommand(cmd1, gdh1); 
		FreeDigInfo(gdh1); */

		return 0; 
 }
}

preFuroDM();