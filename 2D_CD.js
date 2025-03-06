/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Mill Feature
var cmd1 = InitCommand(50, 122); 
ClearMods(cmd1);
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Olive Green|13"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Geometry"); 
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0"); 

// Setting modifier 'Name'
SetModifier(cmd1, 242, "CD"); 
// Setting modifier 'Tolerance'
SetModifier(cmd1, 62, "0.01"); 
// Setting modifier 'Strategy'
SetModifier(cmd1, 100, "1"); 
var gdh1 = InitDigInfo();

// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
//AddEntnoTopologyDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), 67, _DIR_FORWARD, _DIG_3DSNAP);
AskDigInfo("Pick Edges", gdh1, _ENTITYDIG, 164, "", true);
// Finish input
//AddFinishDig(gdh1, _FINISH);

// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
//AddEntnoTopologyDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), 68, _DIR_FORWARD, _DIG_3DSNAP);
//AskDigInfo("Pick 1st Vertex ", gdh1, _ENTITYDIG, 165, "", false);

// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
//AddEntnoTopologyDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), 138, _DIR_FORWARD, _DIG_3DSNAP);
AskDigInfo("Pick 2nd Vertex ", gdh1, _ENTITYDIG, 165, "", true);
// Finish input
AddFinishDig(gdh1, _FINISH); 

var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

