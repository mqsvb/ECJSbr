/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />


localFileEc  =  GetPCIVariable("&PARTNAME");
//alert(localFileEc);

// Initialising command:- Part
//var cmd1 = InitCommand(19, 3); 
//ClearMods(cmd1); 
//Setting modifier 'Name^Browse...'
//SetModifier(cmd1, 14, localFileEc); 
//var gdh1 = InitDigInfo();
//var cmdret = ExecCommand(cmd1, gdh1); 
//FreeDigInfo(gdh1); 

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

// Initialising command:- Simulate
var cmd1 = InitCommand(50, 212); 
ClearMods(cmd1); 
// Setting modifier 'Simulate Toolkit Tools in Preference to Sequence Tools'
SetModifier(cmd1, 250, "0"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 
                     


