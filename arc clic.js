/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Arc
var cmd1 = InitCommand(2, 2); 
ClearMods(cmd1); 
// Setting modifier 'Radius'
SetModifier(cmd1, 104, "60"); 
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
	AddFreeDig(gdh1 , "x"+dmXcoord+"y"+dmYcoord);	
// Finish input
AddFinishDig(gdh1, _FINISH);
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
AddFreeDig(gdh1 , "x"+dmXcoord+"y"+dmYcoord);
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

