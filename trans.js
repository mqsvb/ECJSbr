/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Translate
var cmd1 = InitCommand(29, 66); 
ClearMods(cmd1); 
// Setting modifier 'Dynamic'
SetModifier(cmd1, 243, "<Yes>"); 
var gdh1 = InitDigInfo();
// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
AddEntnoDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 2, 9, 0), _DIR_FORWARD, _DIG_3DSNAP);
// Finish input
AddFinishDig(gdh1, _FINISH);
BeginDigArray(gdh1, _FREEDIG);

// Constructed Selection for Centre made up of 1 selection(s)to follow
AddDigInfoConstructRef(_CMD_CENTRE, 1);

// First Selection (Entity) for Centre made up of 2 records
AddDigInfoComponentInfo(_DIG_3DSNAP, _ENTITYDIG, 2);
AddDigInfoEntnoDig(FindEntityNo(_FINDENTNO_FROM_BASEENT, 2, 9, 0), _DIG_3DSNAP+_DIG_TANGENT+_DIG_2DCHAIN, _DIR_FORWARD);

// Port Selection, Portnumber
AddDigInfoPortNumber(0);
AddDigArray(gdh1);

// Add Free dig to Selection input data
AddFreeDig(gdh1, "XY");
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

