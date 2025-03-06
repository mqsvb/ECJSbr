/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "CRIAR SEQUENCIA PRIMERIO");
	return 0;
}

var cmd1 = InitCommand(2, 1); 
ClearMods(cmd1); 
SetModifier(cmd1, 155, "0"); 
SetModifier(cmd1, 4, "<Yes>"); 
SetModifier(cmd1, 1, "Rust Brown|27"); 
SetModifier(cmd1, 3, "BrutoViec"); 
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

var cmd1 = InitCommand(2, 1); 
ClearMods(cmd1); 
SetModifier(cmd1, 4, "<Yes>"); 
SetModifier(cmd1, 1, "Rust Brown|27"); 
SetModifier(cmd1, 3, "GEO-CDSLOT"); 
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

var cmd1 = InitCommand(2, 1); 
ClearMods(cmd1); 
SetModifier(cmd1, 4, "<Yes>"); 
SetModifier(cmd1, 1, "Goldenrod|23"); 
SetModifier(cmd1, 3, "GEO-CDSLOT"); 
SetModifier(cmd1, 2, "Solid|0"); 
var gdh1 = InitDigInfo();   

///AddFreeDig(gdh1, "Z-5X-30Y-120"); 
AskDig("Selecione Ponto Central do Bruto ", "PICKUP");
AddFreeDig(gdh1, "X-30" + "Y" + GetPCIVariable("Y@PICKUP") + "Z0");
AddFreeDig(gdh1, "X30");
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1);

// Initialising command:- Milling Cutter
cmd0 = InitCommand(36, 108);
ClearMods(cmd0);
// Setting modifier 'ToolStore^Find...'
SetModifier(cmd0, 180, "99");
// Setting modifier 'Mount Description'
SetModifier(cmd0, 269, "20mm LISA");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "1");
// Setting modifier 'Group Code'
SetModifier(cmd0, 16, "22");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "99");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "99");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "20");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Endmill|0");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "48");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "1");
// Setting modifier 'Tap Type'
SetModifier(cmd0, 267, "Undefined|0");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Undercut Distance'
SetModifier(cmd0, 149, "10.5");
// Setting modifier 'Insert Geometry Type'
SetModifier(cmd0, 190, "1|0");
// Setting modifier 'Roughing'
SetModifier(cmd0, 176, "<Yes>");
// Setting modifier 'Finishing'
SetModifier(cmd0, 177, "<Yes>");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Colour'
SetModifier(cmd0, 125, "2|2");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "99");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "150");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "60");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "19");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "20");
// Setting modifier 'Holder Origin'
SetModifier(cmd0, 281, "Flute Height|0");
// Setting modifier 'User Numeric 1'
SetModifier(cmd0, 166, "1");
// Setting modifier 'User String 1'
SetModifier(cmd0, 169, "EM");
// Setting modifier 'Spindle'
SetModifier(cmd0, 252, "");
// Setting modifier 'Direction'
SetModifier(cmd0, 161, "Forward|2");
// Setting modifier 'Gear'
SetModifier(cmd0, 162, "Auto|0");
// Setting modifier 'Max RPM'
SetModifier(cmd0, 163, "50000");
// Setting modifier 'Coolant'
SetModifier(cmd0, 243, "Off|0");
// Setting modifier 'Through Coolant'
SetModifier(cmd0, 146, "Off|0");
// Setting modifier 'Angled Head'
SetModifier(cmd0, 142, "");
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=ENG-SIDINEI\\ECSQLEXPRESS;Database=Rover2019R1;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "452");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2020-06-25 13:59:14");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2020-06-25 13:59:14");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Slot Milling
cmd0 = InitCommand(36, 109);
ClearMods(cmd0);
// Setting modifier 'Strategy'
SetModifier(cmd0, 100, "2D|1");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "5");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "5");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 162, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "40");
// Setting modifier 'Retract'
SetModifier(cmd0, 29, "5");
// Setting modifier 'Level' 

function AskBoxValues(){
SetPCIVariable("_realVar", "18");
nret = AskBox(["Digite Espessura Bruto"], ["_realVar"]);
// Get the PCI variables set by the AskBox (required)
var rVar            = GetPCIVariable("_realVar");

return;
}
AskBoxValues ();

SetModifier(cmd0, 161, "[_realVar]");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "-3");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Angle'
SetModifier(cmd0, 24, "90");
// Setting modifier 'Lead Radius'
SetModifier(cmd0, 25, "0");
// Setting modifier 'Length'
SetModifier(cmd0, 136, "0");
// Setting modifier 'Angle'
SetModifier(cmd0, 172, "90");
// Setting modifier 'Lead Radius'
SetModifier(cmd0, 173, "0");
// Setting modifier 'Length'
SetModifier(cmd0, 174, "0");
// Setting modifier 'Start'
SetModifier(cmd0, 185, "0");
// Setting modifier 'End'
SetModifier(cmd0, 186, "0");
// Setting modifier 'Advanced'
SetModifier(cmd0, 235, "");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Mid Point Snapping'
SetModifier(cmd0, 193, "<Yes>");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Move to Toolchange
cmd0 = InitCommand(101, 41);
ClearMods(cmd0);
// Setting modifier 'Move relative to'
SetModifier(cmd0, 106, "Machine|1");
// Setting modifier 'First'
SetModifier(cmd0, 100, "Z|3");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
