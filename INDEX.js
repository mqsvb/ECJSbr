/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// COMANDO 'START PROCESS'
var cmd1 = InitCommand(2, 102); 
ClearMods(cmd1); 

SetModifier(cmd1, 76, "C:\\Index\\Suricate\\IndexViecelli.exe"); 


var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

