/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Arc
var cmd1 = InitCommand(2, 2); 
ClearMods(cmd1); 
// Setting modifier 'Radius'
SetModifier(cmd1, 104, "5"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Corn Yellow|22"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Tool-Sim"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
// Add Free dig to Selection input data
AddFreeDig(gdh1, "X-100Y0Z0");
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Translate
var cmd1 = InitCommand(29, 66); 
ClearMods(cmd1); 
// Setting modifier 'Copy'
SetModifier(cmd1, 135, "<Yes>"); 
// Setting modifier 'Dynamic'
SetModifier(cmd1, 243, "<Yes>"); 
var gdh1 = InitDigInfo();
// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
AddEntnoDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 2, 10, 0), _DIR_FORWARD, _DIG_3DSNAP);
// Finish input
AddFinishDig(gdh1, _FINISH);
BeginDigArray(gdh1, _FREEDIG);

// Constructed Selection for Centre made up of 1 selection(s)to follow
AddDigInfoConstructRef(_CMD_CENTRE, 1);
// First Selection (Entity) for Centre made up of 2 records
AddDigInfoComponentInfo(_DIG_3DSNAP, _ENTITYDIG, 2);
AddDigInfoEntnoDig(FindEntityNo(_FINDENTNO_FROM_BASEENT, 2, 10, 0), _DIG_3DSNAP+_DIG_TANGENT+_DIG_2DCHAIN, _DIR_FORWARD);
// Port Selection, Portnumber
AddDigInfoPortNumber(0);
AddDigArray(gdh1);
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

