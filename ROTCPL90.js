/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
var cplname
var grauCpl

// Initialising command:- Workplane
var cmd1 = InitCommand(1, 61); 
ClearMods(cmd1); 
// Setting modifier 'Workplane'***********************
SetModifier(cmd1, 240, "L1");
// Setting modifier 'Work Plane'
SetModifier(cmd1, 100, "MILL(XY)|0"); 
// Setting modifier 'Dimensions'
SetModifier(cmd1, 101, "3D|1"); 
// Setting modifier 'Associative'
SetModifier(cmd1, 165, "<Yes>"); 
// Setting modifier 'Workplane Type'
SetModifier(cmd1, 166, "Default|0"); 
// Setting modifier '{Z} Rotation'*************************
SetModifier(cmd1, 23, "-90"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

