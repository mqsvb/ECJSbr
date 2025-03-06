/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Geometry
var cmd1 = InitCommand(50, 128); 
ClearMods(cmd1); 
// Setting modifier 'Copy From'
SetModifier(cmd1, 100, "Body/Faces Silhouette|5"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Corn Yellow|22"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Geometry"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
// Finish input
//AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Geometry
var cmd1 = InitCommand(50, 128); 
ClearMods(cmd1); 
// Setting modifier 'Copy From'
SetModifier(cmd1, 100, "5"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Corn Yellow|22"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
AddEntnoTopologyDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), 3, _DIR_FORWARD, _DIG_3DSNAP);
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

