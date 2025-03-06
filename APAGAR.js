/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Preset Position
var cmd1 = InitCommand(7, 125); 
ClearMods(cmd1); 
// Setting modifier 'Mode'
SetModifier(cmd1, 108, "CENTRE|1"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

