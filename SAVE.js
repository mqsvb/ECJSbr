/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Part
var cmd1 = InitCommand(19, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "C:\\Users\\Viniciusm\\Desktop\\SAVEAS-01.ppf"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Line
var cmd1 = InitCommand(2, 1); 
ClearMods(cmd1); 
// Setting modifier 'Polyline'
SetModifier(cmd1, 155, "0"); 
// Setting modifier 'Horizontal'
SetModifier(cmd1, 4, "<Yes>"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Violet Red|18"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Geo"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
// Add Free dig to Selection input data
AddFreeDig(gdh1, "X0Y0");
// Add Free dig to Selection input data
AddFreeDig(gdh1, "X917.911Y9.69011Z0");
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Part
var cmd1 = InitCommand(19, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "C:\\Users\\Viniciusm\\Desktop\\SAVEAS-01.ppf"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

