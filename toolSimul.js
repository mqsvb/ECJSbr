/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

var retangulo = GetPCINumber("&nextent");
    retangulo++;

// Initialising command:- Rectangle
var cmd1 = InitCommand(2, 1002); 
ClearMods(cmd1); 
// Setting modifier 'Length'
SetModifier(cmd1, 4, "10"); 
// Setting modifier 'Width'
SetModifier(cmd1, 5, "10"); 
// Setting modifier 'Corner Radius'
SetModifier(cmd1, 7, "5"); 
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "Toolsimul"); 
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Corn Yellow|22"); 
// Setting modifier 'Style'
//SetModifier(cmd1, 2, "Solid|0"); 
//SetModifier(cmd1, 2, "Dotted|1"); 
SetModifier(cmd1, 2, "Dashed|2")
var gdh1 = InitDigInfo();

//BeginDigArray(gdh1, _FREEDIG);
// Free Selection 3DSnap YES, Coordinates X, Y, Z
AskDig("Selecionar XY", "PICKO");
AddFreeDig(gdh1, "X"+ GetPCIVariable("X@PICKO") + "Y"+ GetPCIVariable("Y@PICKO") + "Z50");
//AddDigInfoLocation(_DIG_3DSNAP+_DIG_TANGENT+_DIG_2DCHAIN, 120, 229.49, 50);
// Port Selection, Portnumber
AddDigInfoPortNumber(1);
AddDigArray(gdh1);

// Finish input
//AddFinishDig(gdh1, _FINISH); Comentado Confirmação automatica, 
/////////////////////////////; assim o comando entra em loop ate user clicar com direito
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1);

