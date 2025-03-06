/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Feature Finder
var cmd1 = InitCommand(50, 143); 
ClearMods(cmd1); 
// Setting modifier 'Component Selection'
SetModifier(cmd1, 193, "Auto|2"); 
// Setting modifier 'Find Milling Features'
SetModifier(cmd1, 114, "1"); 
// Setting modifier 'Select Workplane'
SetModifier(cmd1, 87, "<Yes>"); 
// Setting modifier 'Highest Wall Level'
SetModifier(cmd1, 40, "<Yes>"); 
// Setting modifier 'Feature Caps'
SetModifier(cmd1, 54, "0"); 
// Setting modifier 'All Holes'
SetModifier(cmd1, 130, "<Yes>"); 
// Setting modifier 'Vertical Holes'
SetModifier(cmd1, 115, "<Yes>"); 
// Setting modifier 'Radial Axis'
SetModifier(cmd1, 83, "Z-Axis|2"); 
// Setting modifier 'Maximum Hole Diameter'
SetModifier(cmd1, 39, "11"); 
// Setting modifier 'Group Similar Holes'
SetModifier(cmd1, 49, "<Yes>"); 
// Setting modifier '2D Pockets'
SetModifier(cmd1, 63, "<Yes>"); 
// Setting modifier '2D Bosses'
SetModifier(cmd1, 64, "<Yes>"); 
// Setting modifier 'Open Pockets'
SetModifier(cmd1, 86, "<Yes>"); 
// Setting modifier 'Open Mill'
SetModifier(cmd1, 72, "<Yes>"); 
// Setting modifier 'Nesting'
SetModifier(cmd1, 82, "Single|0");
//SetModifier(cmd1, 82, "Both|2"); 
// Setting modifier 'Group Flat Faces by Level'
SetModifier(cmd1, 121, "<Yes>"); 
// Setting modifier 'Pockets'
SetModifier(cmd1, 45, "0"); 
// Setting modifier 'Bosses'
SetModifier(cmd1, 47, "0"); 
// Setting modifier 'Holes'
SetModifier(cmd1, 46, "1"); 
// Setting modifier 'Hole'
SetModifier(cmd1, 241, "26|26"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 122, "Hole"); 
// Setting modifier '2D Pocket'
SetModifier(cmd1, 253, "32|32"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 133, "Pocket 2D"); 
// Setting modifier '2D Boss'
SetModifier(cmd1, 245, "19|19"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 125, "Boss 2D"); 
// Setting modifier 'Open Pocket'
SetModifier(cmd1, 243, "10|10"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 123, "Open Pocket"); 
// Setting modifier 'Open Mill'
SetModifier(cmd1, 238, "12|12"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 237, "Open Mill"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 127, "Superseded Hole"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 126, "Pocket"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 128, "Boss"); 
var gdh1 = InitDigInfo();
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Workplane
var cmd1 = InitCommand(16, 61); 
ClearMods(cmd1); 
// Setting modifier 'Name'
var cplAtual = GetPCIVariable("&Workplane"); //**********************************
SetModifier(cmd1, 244, cplAtual); 
//Display ("\nCPL atual é: " + cplAtual);
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

 

