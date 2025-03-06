/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Workplane
var cmd1 = InitCommand(16, 61); 
ClearMods(cmd1); 
// Setting modifier 'Name'
SetModifier(cmd1, 244, "[&TOP]"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 
