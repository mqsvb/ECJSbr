/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Point
var cmd1 = InitCommand(2, 36); 
ClearMods(cmd1); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Blue|2"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Geo"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
// Add Free dig to Selection input data
AddFreeDig(gdh1, "X445.758Y362.159Z0");
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

