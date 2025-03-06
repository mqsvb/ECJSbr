/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

var cmd1 = InitCommand(50, 216); 
ClearMods(cmd1); 
SetModifier(cmd1, 14, "C:\\EC_VIECELLI\\+TOP-Processo2,5_ASSIGN.rbm");  
SetModifier(cmd1, 100, "<No>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

