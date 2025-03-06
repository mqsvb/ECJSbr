/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Insert Nc Code
var cmd1 = InitCommand(7, 109); 
ClearMods(cmd1); 
// Setting modifier 'Comment_'
SetModifier(cmd1, 15, "M212 ; PARADA PROGRAMADA - REMOVER RETALHO"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

