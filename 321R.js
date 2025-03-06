/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Machine Parameters
var cmd1 = InitCommand(16, 62); 
ClearMods(cmd1); 
// Setting modifier 'Sequence Name'
SetModifier(cmd1, 117, "TOP------>"); 
// Setting modifier 'Machine Tool'
SetModifier(cmd1, 129, "rover_321r.mcp"); 
// Setting modifier 'Apply Speed Capping'
SetModifier(cmd1, 145, "<Yes>"); 
// Setting modifier 'Initial Plane'
SetModifier(cmd1, 115, "200"); 
// Setting modifier 'Output Tolerance'
SetModifier(cmd1, 62, "0.001"); 
// Setting modifier 'Units'
SetModifier(cmd1, 116, "Millimetres|1"); 
// Setting modifier 'Max High Feed'
SetModifier(cmd1, 118, "12000"); 
// Setting modifier 'Rapid 3d'
SetModifier(cmd1, 139, "<Yes>"); 
// Setting modifier 'Show Feature Accessibility'
SetModifier(cmd1, 234, "<Yes>"); 
// Setting modifier 'X Home'
SetModifier(cmd1, 109, "0"); 
// Setting modifier 'Y Home'
SetModifier(cmd1, 110, "0"); 
// Setting modifier 'Z Home'
SetModifier(cmd1, 111, "300"); 
// Setting modifier 'X Change'
SetModifier(cmd1, 112, "0"); 
// Setting modifier 'Y Change'
SetModifier(cmd1, 113, "0"); 
// Setting modifier 'Z Change'
SetModifier(cmd1, 114, "300"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

