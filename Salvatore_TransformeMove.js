/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
var cmd1 = InitCommand(4, 32); 
ClearMods(cmd1); 
SetModifier(cmd1, 43, "0"); 
SetModifier(cmd1, 44, "0"); 
SetModifier(cmd1, 45, "-20"); 
SetModifier(cmd1, 14, "LBFROM"); 
SetModifier(cmd1, 26, "LBTO"); 
SetModifier(cmd1, 37, "15"); 
SetModifier(cmd1, 21, "No|0"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

