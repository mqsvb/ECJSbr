/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
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

