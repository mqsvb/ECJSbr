/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Geometry
var cmd1 = InitCommand(50, 128); 
ClearMods(cmd1); 
// Setting modifier 'Copy From'
SetModifier(cmd1, 100, "Loops|1"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Red|4"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "GeoDXF"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 
// Setting modifier 'Create'
SetModifier(cmd1, 4, "Continuous|1"); 
var gdh1 = InitDigInfo();

// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
//AddEntnoTopologyDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), 18, _DIR_FORWARD, _DIG_3DSNAP);

AskDigInfo("Seleciona a Face", gdh1, _ENTITYDIG, 162, "", false);

//AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

