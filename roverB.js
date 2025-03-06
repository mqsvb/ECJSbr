/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Machining Sequence

// Initialising command:- Machine Parameters
var cmd1 = InitCommand(16, 62); 
ClearMods(cmd1); 
// Setting modifier 'Sequence Name'
SetModifier(cmd1, 117, ""); 
// Setting modifier 'Machine Tool'
SetModifier(cmd1, 129, "rovers_b-2019.mcp"); 
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

var cmd1 = InitCommand(11, 83); 
ClearMods(cmd1); 
// Setting modifier 'Operations'
SetModifier(cmd1, 194, "0"); 
// Setting modifier 'Redraw'
SetModifier(cmd1, 197, "<Yes>"); 
// Setting modifier 'All Instructions'
SetModifier(cmd1, 198, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Generate CNC Code
var cmd1 = InitCommand(19, 666); 
ClearMods(cmd1); 
// Setting modifier 'Use Part Name'
SetModifier(cmd1, 240, "<Yes>"); 
// Setting modifier 'Open Editor'
SetModifier(cmd1, 253, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 



