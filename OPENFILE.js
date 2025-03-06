/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
// Initialising command:- New File
var cmd1 = InitCommand(9, 0); 
ClearMods(cmd1); 
// Setting modifier 'Force Restart'
SetModifier(cmd1, 339, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Inventor File
var cmd1 = InitCommand(3, 6); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "\\\\server\\index\\Projetos\\40617\\Itens\\23040525\\23041905\\Sólido7.ipt"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Part
var cmd1 = InitCommand(19, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "\\\\server\\Index\\Projetos\\40617\\Itens\\Programas\\Edgecam\\2872799.ppf"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Workplane
var cmd1 = InitCommand(16, 61); 
ClearMods(cmd1); 
// Setting modifier 'Name'
SetModifier(cmd1, 244, "[&TOP]"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Part
var cmd1 = InitCommand(19, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "\\\\server\\Index\\Projetos\\40617\\Itens\\Programas\\Edgecam\\2872799.ppf"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

