/// <reference path="c:\program files\hexagon\edgecam 2022.1\cam\PCI\pci-vsdoc.js" />
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
SetModifier(cmd0, 180, "R2");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "2");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "67841 - FRESA TOPO ESF 2,0MM MD327B 2C 802/MG OSG/HY PRO 7320272");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "2mm ESF");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "2");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Ballnose|2");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "20");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "3");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "R2|11");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "118");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "50");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "2");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Tool Graphic^Browse...'
SetModifier(cmd0, 170, "");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "20");
// Setting modifier 'Holder Origin'
SetModifier(cmd0, 281, "Flute Height|0");
// Setting modifier 'User Numeric 1'
SetModifier(cmd0, 166, "");
// Setting modifier 'User Numeric 2'
SetModifier(cmd0, 167, "");
// Setting modifier 'User String 1'
SetModifier(cmd0, 169, "");
// Setting modifier 'User String 2'
SetModifier(cmd0, 175, "");
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
// Setting modifier 'Flags'
SetModifier(cmd0, 261, "0");
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK\\ECSQLEXPRESS;Database=DB_EC2022;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "5242");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2023-01-26 13:49:08");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2023-01-26 13:49:08");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Flow Surface Cycle
cmd0 = InitCommand(22, 680);
ClearMods(cmd0);
// Setting modifier 'Strategy'
SetModifier(cmd0, 32, "Blend between Two Curves|1");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 253, "Optimised|2");
// Setting modifier 'Cut Order'
SetModifier(cmd0, 41, "Standard|1");
// Setting modifier 'Offset'
SetModifier(cmd0, 28, "0");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 24, "0.05");
// Setting modifier '% Stepover'
SetModifier(cmd0, 26, "10");
// Setting modifier 'Comment'
SetModifier(cmd0, 295, "-------------------------------- A");
// Setting modifier 'Feed Rate'
SetModifier(cmd0, 5, "3");
// Setting modifier 'Plunge Feed Rate'
SetModifier(cmd0, 6, "3");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 85, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 140, "5");
// Setting modifier 'Associative'
SetModifier(cmd0, 241, "<Yes>");
// Setting modifier 'Tool Axis Shift'
SetModifier(cmd0, 8, "0");
// Setting modifier 'Leads'
SetModifier(cmd0, 117, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "Horizontal|1");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 188, "100");
// Setting modifier 'Equal Lead Moves'
SetModifier(cmd0, 184, "<Yes>");
// Setting modifier 'Angle'
SetModifier(cmd0, 124, "90");
// Setting modifier 'Start Extension'
SetModifier(cmd0, 158, "-265");
// Setting modifier 'End Extension'
SetModifier(cmd0, 159, "-265");
// Setting modifier 'Links'
SetModifier(cmd0, 97, "");
// Setting modifier 'Short Links'
SetModifier(cmd0, 102, "Straight|0");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 113, "1");
// Setting modifier 'Long Links'
SetModifier(cmd0, 201, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 144, "5");
// Setting modifier 'Feed When Plunging'
SetModifier(cmd0, 13, "<Yes>");
// Setting modifier 'Short Gaps'
SetModifier(cmd0, 200, "Straight|0");
// Setting modifier 'Long Gaps'
SetModifier(cmd0, 205, "Clearance|5");
// Setting modifier 'Gap Link Distance'
SetModifier(cmd0, 206, "1");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
