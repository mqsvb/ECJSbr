/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}

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
SetModifier(cmd0, 17, "14265 - PASTILHA 49,5X12X1,5(COM FIO CORTE 4 LADOS)");
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
SetModifier(cmd0, 179, "47");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "1");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Roughing'
SetModifier(cmd0, 176, "<Yes>");
// Setting modifier 'Finishing'
SetModifier(cmd0, 177, "<Yes>");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "99");
// Setting modifier 'Lower Diameter'
SetModifier(cmd0, 322, "20");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "150");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "74");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "20");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Tool Graphic^Browse...'
SetModifier(cmd0, 170, "99.csv");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "25");
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
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK\\ECSQLEXPRESS;Database=DB_EC2022;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "452");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2023-03-09 10:38:50");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2023-03-09 10:38:50");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- 5 Eixos
cmd0 = InitCommand(7, 128);
ClearMods(cmd0);
// Setting modifier 'Mode'
SetModifier(cmd0, 108, "ATIVAR|1");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Five Axis
cmd0 = InitCommand(22, 143);
ClearMods(cmd0);
// Setting modifier 'Strategy'
SetModifier(cmd0, 32, "Parallel to Curve|4");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 253, "Optimised|4");
// Setting modifier 'Cutting Range'
SetModifier(cmd0, 33, "Exact Surface|2");
// Setting modifier 'Start Margin'
SetModifier(cmd0, 34, "5");
// Setting modifier 'Cut Order'
SetModifier(cmd0, 41, "Standard|1");
// Setting modifier 'Reverse Cuts'
SetModifier(cmd0, 39, "<Yes>");
// Setting modifier 'Preferred Rotary Solution'
SetModifier(cmd0, 27, "Automatic|1");
// Setting modifier 'Tool Contact Point'
SetModifier(cmd0, 49, "Automatic|1");
// Setting modifier 'Round Corners'
SetModifier(cmd0, 155, "1");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 24, "0.01");
// Setting modifier 'Cut Distance'
SetModifier(cmd0, 26, "11");
// Setting modifier 'Depth'
SetModifier(cmd0, 85, "");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 138, "Plane|1");
// Setting modifier 'Clearance Axis'
SetModifier(cmd0, 139, "Z Axis|3");
// Setting modifier 'Clearance Plane Height'
SetModifier(cmd0, 140, "50");
// Setting modifier 'Associative'
SetModifier(cmd0, 241, "<Yes>");
// Setting modifier 'Pole Handling'
SetModifier(cmd0, 276, "Freeze angle around pole|1");
// Setting modifier 'Interpolation Type'
SetModifier(cmd0, 280, "By vector|1");
// Setting modifier 'Interpolate Distance'
SetModifier(cmd0, 255, "<Yes>");
// Setting modifier 'Max Distance'
SetModifier(cmd0, 111, "5");
// Setting modifier 'Interpolate Angle'
SetModifier(cmd0, 273, "<Yes>");
// Setting modifier 'Tool Axis Control'
SetModifier(cmd0, 50, "");
// Setting modifier 'Output Type'
SetModifier(cmd0, 51, "5-Axis|3");
// Setting modifier 'Tilt Strategy'
SetModifier(cmd0, 53, "Relative to Cut Direction|2");
// Setting modifier 'Side Tilt Definition Type'
SetModifier(cmd0, 63, "Follow Surface|1");
// Setting modifier 'Ignore Linear Limits'
SetModifier(cmd0, 78, "<Yes>");
// Setting modifier 'Check'
SetModifier(cmd0, 176, "");
// Setting modifier 'Check'
SetModifier(cmd0, 186, "Tool|1");
// Setting modifier 'Against'
SetModifier(cmd0, 187, "Both|2");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 193, "0.01");
// Setting modifier 'Strategy'
SetModifier(cmd0, 194, "Retract|1");
// Setting modifier 'Check'
SetModifier(cmd0, 203, "Both|3");
// Setting modifier 'Against'
SetModifier(cmd0, 204, "Check Surfaces|1");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 210, "0.02");
// Setting modifier 'Strategy'
SetModifier(cmd0, 212, "Remove Toolpath|4");
// Setting modifier 'Check More...'
SetModifier(cmd0, 236, "");
// Setting modifier 'Check'
SetModifier(cmd0, 221, "None|0");
// Setting modifier 'Check'
SetModifier(cmd0, 239, "None|0");
// Setting modifier 'Leads'
SetModifier(cmd0, 117, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "Radius Vertical to Tool Axis|4");
// Setting modifier 'Equal Lead Moves'
SetModifier(cmd0, 184, "<Yes>");
// Setting modifier 'Angle'
SetModifier(cmd0, 124, "90");
// Setting modifier 'Start Extension'
SetModifier(cmd0, 158, "15");
// Setting modifier 'End Extension'
SetModifier(cmd0, 159, "15");
// Setting modifier 'Links'
SetModifier(cmd0, 97, "");
// Setting modifier 'Short Links'
SetModifier(cmd0, 102, "Follow Surface|2");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 113, "20");
// Setting modifier 'Long Links'
SetModifier(cmd0, 201, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 144, "30");
// Setting modifier 'Short Gaps'
SetModifier(cmd0, 200, "Straight|0");
// Setting modifier 'Long Gaps'
SetModifier(cmd0, 205, "Clearance|5");
// Setting modifier 'Gap Link Distance'
SetModifier(cmd0, 206, "1");
// Setting modifier 'Feed Rates'
SetModifier(cmd0, 9, "");
// Setting modifier 'Feed Rate'
SetModifier(cmd0, 5, "6");
// Setting modifier 'Plunge Feed Rate'
SetModifier(cmd0, 6, "6");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "None|0");
// Setting modifier 'Multiple Cuts'
SetModifier(cmd0, 145, "");
// Setting modifier 'Stock Type'
SetModifier(cmd0, 165, "None|0");
// Setting modifier 'Sort By'
SetModifier(cmd0, 217, "Slices|1");
// Setting modifier 'Sort By'
SetModifier(cmd0, 223, "Passes|2");
// Setting modifier 'Strategy'
SetModifier(cmd0, 227, "None|1");
// Setting modifier 'Axis/Direction'
SetModifier(cmd0, 259, "X Axis|1");
// Setting modifier 'Sort By'
SetModifier(cmd0, 265, "Complete toolpath|1");
// Setting modifier 'Apply Linking'
SetModifier(cmd0, 266, "Before rotation|1");
// Setting modifier 'Apply Stock'
SetModifier(cmd0, 267, "Before rotation|1");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Move to Toolchange
cmd0 = InitCommand(101, 41);
ClearMods(cmd0);
// Setting modifier 'Move relative to'
SetModifier(cmd0, 106, "Machine|1");
// Setting modifier 'First'
SetModifier(cmd0, 100, "Z|3");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- 5 Eixos
cmd0 = InitCommand(7, 128);
ClearMods(cmd0);
// Setting modifier 'Mode'
SetModifier(cmd0, 108, "CANCELAR|2");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
